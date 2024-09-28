"use client"

import { useState, ChangeEvent } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle } from "lucide-react"
import Image from 'next/image'

export default function CombinedForm() {
  const [logo, setLogo] = useState<string | null>(null)
  const [projectName, setProjectName] = useState('')
  const [projectTheme, setProjectTheme] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [detailsDescription, setDetailsDescription] = useState('')
  const minCharacters = 200

  const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogo(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Submitted Project Name:', projectName)
    console.log('Submitted Project Theme:', projectTheme)
    console.log('Submitted Project Description:', projectDescription)
    console.log('Submitted Details Description:', detailsDescription)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
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
        <Label htmlFor="project-description">One-Sentence Project Outline </Label>
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
          Min. {minCharacters} Characters
        </p>
      </div>
    </form>
  )
}
