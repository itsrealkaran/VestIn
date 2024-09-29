"use client"

import { useState } from "react"
import { X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function Component() {
  const [photo, setPhoto] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [professions, setProfessions] = useState<string[]>([])
  const [currentProfession, setCurrentProfession] = useState("")
  const [company, setCompany] = useState("")

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddProfession = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentProfession.trim() !== "") {
      setProfessions([...professions, currentProfession.trim()])
      setCurrentProfession("")
    }
  }

  const handleRemoveProfession = (index: number) => {
    setProfessions(professions.filter((_, i) => i !== index))
  }

  const handleSave = () => {
    // Implement save functionality here
    console.log({ photo, name, professions, company })
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Investor Profile</h1>
          <div className="relative w-32 h-32 mx-auto mb-4">
            {photo ? (
              <Image
                src={photo}
                alt="Investor"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <Upload className="w-12 h-12 text-gray-400" />
              </div>
            )}
            <Input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div>
            <Label htmlFor="profession">Profession</Label>
            <Input
              id="profession"
              value={currentProfession}
              onChange={(e) => setCurrentProfession(e.target.value)}
              onKeyDown={handleAddProfession}
              placeholder="Enter a profession and press Enter"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {professions.map((profession, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                >
                  {profession}
                  <button
                    onClick={() => handleRemoveProfession(index)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your company"
            />
          </div>

          <Button onClick={handleSave} className="w-full">
            Save Information
          </Button>
        </div>
      </div>
    </div>
  )
}