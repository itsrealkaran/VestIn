"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Twitter, Linkedin, Instagram, FileText, PresentationIcon, Trophy } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import project from '@/data/projectCardDescription'

export default function ProjectPage({ params }: any) {
  const { toast } = useToast()
  const [fundingPercentage, setFundingPercentage] = useState(33)

  const handleFund = () => {
    setFundingPercentage(prevPercentage => Math.min(prevPercentage + 10, 100))
    toast({
      title: "Funding Successful!",
      description: "Thank you for supporting this project.",
      action: <ToastAction altText="View project">View project</ToastAction>,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-2">{project[params.projectInfo-1].name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{project[params.projectInfo-1].longDescription}</p>
          <div className="aspect-video mb-6">
            <iframe
              src={project[params.projectInfo-1].videoUrl}
              title="Project Video"
              className="w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>About the Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project[params.projectInfo-1].longDescription}</p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Creator:</span>
                  <span>{project[params.projectInfo-1].creator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Theme:</span>
                  <span>{project[params.projectInfo-1].theme}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Phase:</span>
                  <Badge>{project[params.projectInfo-1].projectPhase}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Followers:</span>
                  <span>{project[params.projectInfo-1].followers.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Awards:</span>
                  <span className="flex items-center">
                    <Trophy className="w-4 h-4 mr-1" />
                    {project[params.projectInfo-1].awards}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Funding Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {project[params.projectInfo-1].fundingGoal.amount.toLocaleString()} {project[params.projectInfo-1].fundingGoal.currency}
              </div>
              <Progress value={fundingPercentage} className="mb-2" />
              <p className="text-sm text-muted-foreground mb-4">{fundingPercentage}% funded</p>
              <Button onClick={handleFund} className="w-full">Fund This Project</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                {project[params.projectInfo-1].teamMembers.map((member, index) => (
                  <Avatar key={index}>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project[params.projectInfo-1].milestones.map((milestone, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium">{milestone.quarter}</span>
                  <span>{milestone.description}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
              <Button asChild>
                <Link href={project[params.projectInfo-1].documentation.businessPlan}>
                  <FileText className="mr-2 h-4 w-4" /> Business Plan
                </Link>
              </Button>
              <Button asChild>
                <Link href={project[params.projectInfo-1].documentation.pitchDeck}>
                  <PresentationIcon className="mr-2 h-4 w-4" /> Pitch Deck
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
              <Button variant="outline" asChild>
                <Link href={project[params.projectInfo-1].socialMedia.twitter}>
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project[params.projectInfo-1].socialMedia.linkedin}>
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project[params.projectInfo-1].socialMedia.instagram}>
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}