"use client";

import { useState, ChangeEvent } from 'react';
import { ethers } from 'ethers';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectNFT from './ProjectNFT.json'; // Adjust the path accordingly
import Vesting from './Vesting.json'; // Import the ABI of your Vesting contract

const CONTRACT_ADDRESS = '0x28785bb65e5f9FE617b5765f1d0f81fa223Cc8Bd'; // Replace with your contract address
const VESTING_CONTRACT_ADDRESS = '0xYourVestingContractAddress'; // Replace with your Vesting contract address

type Milestone = {
  quarter: string;
  description: string;
  amount: number; // Added to hold the amount for each milestone
}

export default function ProjectForm() {
  const [logo, setLogo] = useState<string | null>(null);
  const [projectName, setProjectName] = useState('');
  const [projectTheme, setProjectTheme] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [detailsDescription, setDetailsDescription] = useState('');
  const [goalAmount, setGoalAmount] = useState<string>('0');
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [newMilestone, setNewMilestone] = useState<Milestone>({ quarter: '', description: '', amount: 0 });
  const [isSaved, setIsSaved] = useState(false);
  
  const minDescriptionChars = 200;
  const minMilestoneChars = 20;

  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const projectNFTContract = new ethers.Contract(CONTRACT_ADDRESS, ProjectNFT.abi, signer);

    try {
      const tx = await projectNFTContract.mintProjectNFT(
        await signer.getAddress(),
        projectName,
        projectDescription,
        logo || '', // Use uploaded logo URL if available
        '0x19A7cd55979516320c055e1d178099eFb73cCC7E'
      );

      await tx.wait();
      console.log('NFT minted successfully:', tx);
      alert('NFT minted successfully!');
    } catch (error) {
      console.error('Error minting NFT:', error);
      alert('Minting failed. Please try again.');
    }
  };

  const addMilestone = () => {
    if (newMilestone.quarter && newMilestone.description.length >= minMilestoneChars) {
      setMilestones([...milestones, newMilestone]);
      setNewMilestone({ quarter: '', description: '', amount: 0 });
      setIsSaved(false);
    } else {
      console.error(`Description must be at least ${minMilestoneChars} characters long.`);
    }
  };

  const saveMilestones = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const vestingContract = new ethers.Contract(VESTING_CONTRACT_ADDRESS, Vesting.abi, signer);

    try {
      const tokenId = 1; // Replace this with the actual token ID of the project NFT

      const q1Amount = milestones.find(ms => ms.quarter === 'Q1')?.amount || 0;
      const q2Amount = milestones.find(ms => ms.quarter === 'Q2')?.amount || 0;
      const q3Amount = milestones.find(ms => ms.quarter === 'Q3')?.amount || 0;
      const q4Amount = milestones.find(ms => ms.quarter === 'Q4')?.amount || 0;

      await vestingContract.setMilestoneFunds(tokenId, q1Amount, q2Amount, q3Amount, q4Amount);
      
      console.log('Milestones saved to Vesting contract');
      alert('Milestones saved successfully!');
      setIsSaved(true);
    } catch (error) {
      console.error('Error saving milestones:', error);
      alert('Saving milestones failed. Please try again.');
    }
  };

  const groupedMilestones = milestones.reduce((acc, milestone) => {
    if (!acc[milestone.quarter]) {
      acc[milestone.quarter] = [];
    }
    acc[milestone.quarter].push(milestone);
    return acc;
  }, {} as Record<string, Milestone[]>);

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-10">
      {/* Project Logo Upload */}
      <div className="relative w-32 h-32 mx-auto">
        <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
          {logo ? (
            <Image src={logo} alt="Project Logo" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Logo
            </div>
          )}
        </div>
        <label htmlFor="logo-upload" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-full">
          <PlusCircle className="w-10 h-10 text-white" />
          <input
            id="logo-upload"
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Project Name Input */}
      <div className="space-y-2">
        <Label htmlFor="project-name">Project Name</Label>
        <Input
          id="project-name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter project name"
        />
      </div>

      {/* Project Theme Select */}
      <div className="space-y-2">
        <Label htmlFor="project-theme">Project Theme</Label>
        <Select value={projectTheme} onValueChange={setProjectTheme}>
          <SelectTrigger>
            <SelectValue placeholder="Select project theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nft">NFT</SelectItem>
            <SelectItem value="defi">DeFi</SelectItem>
            <SelectItem value="dao">DAO</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Project Short Description Textarea */}
      <div className="space-y-2">
        <Label htmlFor="project-description">One-Sentence Project Outline</Label>
        <Textarea
          id="project-description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Enter project description"
          rows={4}
        />
      </div>

      {/* Project Long Description Textarea */}
      <div className="space-y-2">
        <Label htmlFor="projectDetails">Project Details <span className="text-red-500">*</span></Label>
        <Textarea
          id="projectDetails"
          placeholder="Type long description..."
          value={detailsDescription}
          onChange={(e) => setDetailsDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={6}
        />
        <p className="text-sm text-gray-500 mt-2">
          Min. {minDescriptionChars} Characters
        </p>
      </div>

      {/* Funding Goal Section */}
      <Card className="max-w-2xl mx-auto p-6 space-y-4">
        <CardHeader>
          <CardTitle>Funding Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="goalAmount">Goal amount</Label>
          <Input
            type="number"
            id="goalAmount"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="w-full"
            min="0"
            step="1"
          />
          <Button onClick={() => console.log('Saving goal amount:', goalAmount)}>Save Goal Amount</Button>
        </CardContent>
      </Card>

      {/* Project Milestones Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Add New Milestone</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quarter" className="text-right">Quarter</Label>
              <Select
                value={newMilestone.quarter}
                onValueChange={(value) => setNewMilestone({ ...newMilestone, quarter: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select quarter" />
                </SelectTrigger>
                <SelectContent>
                  {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
                    <SelectItem key={q} value={q}>{q}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="milestone-description" className="text-right">Milestone Description</Label>
              <Textarea
                id="milestone-description"
                value={newMilestone.description}
                onChange={(e) => setNewMilestone({ ...newMilestone, description: e.target.value })}
                className="col-span-3"
                rows={2}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="milestone-amount" className="text-right">Amount</Label>
              <Input
                type="number"
                id="milestone-amount"
                value={newMilestone.amount}
                onChange={(e) => setNewMilestone({ ...newMilestone, amount: parseFloat(e.target.value) })}
                className="col-span-3"
                min="0"
              />
            </div>
            <Button onClick={addMilestone}>Add Milestone</Button>
          </div>
        </CardContent>
      </Card>

      {/* Display Milestones */}
      <Card>
        <CardHeader>
          <CardTitle>Project Phases</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(groupedMilestones).map(([quarter, quarterMilestones]) => (
            <div key={quarter} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{quarter}</h3>
              <ul className="list-disc pl-5">
                {quarterMilestones.map((milestone, index) => (
                  <li key={index}>{milestone.description} (Amount: {milestone.amount})</li>
                ))}
              </ul>
            </div>
          ))}
          {milestones.length > 0 && (
            <Button onClick={saveMilestones} className="mt-4">
              {isSaved ? 'Saved!' : 'Save Milestones'}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Submit Project Button */}
      <div className="flex justify-end space-x-4 mt-10">
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
          Submit Project
        </Button>
      </div>
    </form>
  );
}
