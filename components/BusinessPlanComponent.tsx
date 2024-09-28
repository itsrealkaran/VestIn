'use client';

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Note: jsPDF and html2canvas are typically client-side libraries
// They should be imported dynamically or used within useEffect
import dynamic from 'next/dynamic';

const BusinessPlanComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [businessPlan, setBusinessPlan] = useState({
    executiveSummary: "This is a brief description of the business and its objectives.",
    businessDescription: "Details about the business, including its mission and vision.",
    marketAnalysis: "An analysis of the industry, market size, and growth potential.",
    marketingStrategy: "How the business intends to reach its target market and drive sales.",
    financialProjections: "Projected revenue, expenses, and profitability over the next few years."
  });
  const pdfContentRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    // Simulate AI generation (replace with actual API call)
    const generatedPlan = {
      executiveSummary: `AI-generated summary based on: ${prompt}`,
      businessDescription: `AI-generated description based on: ${prompt}`,
      marketAnalysis: `AI-generated analysis based on: ${prompt}`,
      marketingStrategy: `AI-generated strategy based on: ${prompt}`,
      financialProjections: `AI-generated projections based on: ${prompt}`
    };
    setBusinessPlan(generatedPlan);
    setIsModalOpen(false);
    setPrompt('');
  };

  const handleExportPDF = async () => {
    if (typeof window !== 'undefined' && pdfContentRef.current) {
      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(pdfContentRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('business_plan.pdf');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Business Plan</h1>

      <div ref={pdfContentRef} className="p-4 border border-gray-300 rounded-lg bg-white">
        <h2 className="text-2xl font-semibold mb-2">Executive Summary</h2>
        <p>{businessPlan.executiveSummary}</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Business Description</h2>
        <p>{businessPlan.businessDescription}</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Market Analysis</h2>
        <p>{businessPlan.marketAnalysis}</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Marketing Strategy</h2>
        <p>{businessPlan.marketingStrategy}</p>

        <h2 className="text-2xl font-semibold mt-4 mb-2">Financial Projections</h2>
        <p>{businessPlan.financialProjections}</p>
      </div>

      <div className="mt-4 space-x-4">
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
            <Button onClick={handleGenerate}>Generate</Button>
          </DialogContent>
        </Dialog>
        <Button onClick={handleExportPDF}>Export PDF</Button>
      </div>
    </div>
  );
}

export default BusinessPlanComponent;