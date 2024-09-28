'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define a Milestone type
type Milestone = {
  quarter: string
  description: string
}

export default function ProjectDetails() {
  const [goalAmount, setGoalAmount] = useState<string>('0')
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [newMilestone, setNewMilestone] = useState<Milestone>({ quarter: '', description: '' })
  const [isSaved, setIsSaved] = useState(false)
  const minCharacters = 20 

  // Handle adding milestones
  const addMilestone = () => {
    if (newMilestone.quarter && newMilestone.description.length >= minCharacters) {
      setMilestones([...milestones, newMilestone])
      setNewMilestone({ quarter: '', description: '' })
      setIsSaved(false)
    } else {
      console.error(`Description must be at least ${minCharacters} characters long.`)
    }
  }

  // Handle saving milestones
  const saveMilestones = () => {
    console.log('Saving milestones:', milestones)
    setIsSaved(true)
  }

  // Group milestones by quarter
  const groupedMilestones = milestones.reduce((acc, milestone) => {
    if (!acc[milestone.quarter]) {
      acc[milestone.quarter] = []
    }
    acc[milestone.quarter].push(milestone)
    return acc
  }, {} as Record<string, Milestone[]>)

  // Handle saving the goal amount
  const handleSaveGoalAmount = () => {
    console.log('Saving goal amount:', goalAmount)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl space-y-10">
      {/* Funding Goal Section */}
      <Card className="max-w-2xl mx-auto p-6 space-y-6">
        <CardHeader>
          <CardTitle>Funding Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Set an achievable goal that covers what you need to complete your project.
          </p>

          <div className="space-y-4">
            <div>
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
            </div>
            <Button onClick={handleSaveGoalAmount}>Save Goal Amount</Button>
          </div>
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
                    <SelectItem key={q} value={q}>
                      {q}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                id="description"
                value={newMilestone.description}
                onChange={(e) => setNewMilestone({ ...newMilestone, description: e.target.value })}
                className="col-span-3"
              />
            </div>
            <Button onClick={addMilestone} className="ml-auto">Add Milestone</Button>
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
                  <li key={index}>{milestone.description}</li>
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
        <Button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          Submit Project
        </Button>
      </div>
    </div>
  )
}
