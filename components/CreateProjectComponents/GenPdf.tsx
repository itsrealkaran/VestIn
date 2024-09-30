'use client';

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileIcon, Trash2Icon, Loader } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DocumentItem {
  name: string;
  status: string;
  hasGenerateAI?: boolean;
  file?: File;
}

export default function DocumentManagementComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [documents, setDocuments] = useState<DocumentItem[]>([
    { name: "Business Plan", status: "Not provided", hasGenerateAI: true },
    { name: "Pitchdeck", status: "Not provided" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    console.log('Generating with prompt:', prompt);

    // Simulate a 3-second loading time
    setTimeout(async () => {
      if (typeof window !== 'undefined') {
        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF();

        // Add content to the PDF
        doc.setFontSize(16);
        doc.text("Business Plan", 10, 10);

        doc.setFontSize(14);
        doc.text("AI Generated Content", 10, 20);
        doc.setFontSize(12);
        doc.text(prompt, 10, 30, { maxWidth: 180 });

        // Save the PDF
        doc.save('business_plan.pdf');
      }

      setIsModalOpen(false);
      setPrompt('');
      setIsLoading(false);

      // Update the status of the Business Plan document
      setDocuments(prevDocs => {
        return prevDocs.map(doc => 
          doc.name === "Business Plan" ? { ...doc, status: "Generated" } : doc
        );
      });
    }, 3000);
  };

  const handleUpload = (index: number) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
      fileInputRef.current.onchange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const file = target.files[0];
          setDocuments(prevDocs => {
            const newDocs = [...prevDocs];
            newDocs[index] = {
              ...newDocs[index],
              status: "Uploaded",
              file: file
            };
            return newDocs;
          });
        }
      };
    }
  };

  const handleDelete = (index: number) => {
    setDocuments(prevDocs => {
      const newDocs = [...prevDocs];
      newDocs[index] = {
        ...newDocs[index],
        status: "Not provided",
        file: undefined
      };
      return newDocs;
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Document Management</h1>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <FileIcon className="mr-2" />
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-sm text-gray-500">{doc.status}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {doc.hasGenerateAI && (
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline">Generate with AI</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Generate with AI</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="prompt" className="col-span-4">
                          Enter your prompt
                        </Label>
                        <Textarea
                          id="prompt"
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          className="col-span-4 min-h-[100px]"
                          placeholder="Type your prompt here..."
                        />
                      </div>
                    </div>
                    <Button onClick={handleGenerate} disabled={isLoading}>
                      {isLoading ? <Loader className="animate-spin h-4 w-4" /> : 'Generate'}
                    </Button>
                  </DialogContent>
                </Dialog>
              )}
              <Button onClick={() => handleUpload(index)}>
                {doc.status === "Uploaded" ? "Replace" : "Upload"}
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleDelete(index)}
                disabled={doc.status === "Not provided"}
              >
                <Trash2Icon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept=".pdf,.doc,.docx,.txt"
      />
    </div>
  );
}