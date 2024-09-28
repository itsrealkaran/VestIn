'use client';

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Youtube, Twitter, Linkedin, Instagram, FileIcon, Trash2Icon, Loader } from "lucide-react"; // Import Loader
import { jsPDF } from 'jspdf'; // Import jsPDF
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

export default function CombinedComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [documents, setDocuments] = useState<DocumentItem[]>([
    { name: "Business Plan", status: "Not provided", hasGenerateAI: true },
    { name: "Pitchdeck", status: "Not provided" },
  ]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = () => {
    setIsLoading(true); // Start loading
    console.log('Generating with prompt:', prompt);
    
    // Simulate PDF generation
    setTimeout(() => {
      // PDF creation logic
      const doc = new jsPDF();

      // Add static content (Business Plan Sections)
      doc.setFontSize(16);
      doc.text("Business Plan", 10, 10);

      doc.setFontSize(14);
      doc.text("Executive Summary", 10, 20);
      doc.setFontSize(12);
      doc.text("This is a brief description of the business and its objectives.", 10, 30);

      doc.setFontSize(14);
      doc.text("Business Description", 10, 40);
      doc.setFontSize(12);
      doc.text("Details about the business, including its mission and vision.", 10, 50);

      doc.setFontSize(14);
      doc.text("Market Analysis", 10, 60);
      doc.setFontSize(12);
      doc.text("An analysis of the industry, market size, and growth potential.", 10, 70);

      doc.setFontSize(14);
      doc.text("Marketing Strategy", 10, 80);
      doc.setFontSize(12);
      doc.text("How the business intends to reach its target market and drive sales.", 10, 90);

      doc.setFontSize(14);
      doc.text("Financial Projections", 10, 100);
      doc.setFontSize(12);
      doc.text("Projected revenue, expenses, and profitability over the next few years.", 10, 110);

      // Add user prompt content
      doc.setFontSize(14);
      doc.text("AI Generated Content", 10, 130);
      doc.setFontSize(12);
      doc.text(prompt, 10, 140);

      // Save the PDF
      doc.save('business_plan.pdf');

      // Reset states
      setIsModalOpen(false);
      setPrompt('');
      setIsLoading(false); // End loading
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
      <div className="space-y-6">
        {/* Input fields for URLs and Additional Information */}
        {/* ... (same as before) */}
      </div>

      <div className="mt-9"> 
        <h2 className="text-2xl font-bold mb-4 flex items-center ">
          <FileIcon className="mr-2" />
          Documentation
        </h2>
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
                  disabled={doc.status !== "Uploaded"}
                >
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
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
