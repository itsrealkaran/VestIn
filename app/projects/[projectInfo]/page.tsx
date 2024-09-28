import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Twitter, Linkedin, Instagram, FileText, PresentationIcon, Trophy } from "lucide-react"
import Link from "next/link"
import project from '@/data/projectCardDescription'


// interface Project {
//   id: string;
//   name: string;
//   creator: string;
//   theme: string;
//   shortDescription: string;
//   longDescription: string;
//   teamMembers: { name: string; avatar: string }[];
//   followers: number;
//   awards: number;
//   videoUrl: string;
//   socialMedia: {
//     twitter: string;
//     linkedin: string;
//     instagram: string;
//   };
//   documentation: {
//     businessPlan: string;
//     pitchDeck: string;
//   };
//   fundingGoal: {
//     amount: number;
//     currency: string;
//   };
//   milestones: { quarter: string; description: string }[];
//   projectPhase: string;
// }// Mock data based on the Project interface

// const project: Project = {
//   id: "1",
//   name: "EcoTech Solutions",
//   creator: "Jane Doe",
//   theme: "Sustainability",
//   shortDescription: "Innovative eco-friendly technology solutions",
//   longDescription: "EcoTech Solutions is dedicated to developing cutting-edge technologies that address environmental challenges. Our team of experts is committed to creating sustainable solutions for a greener future.",
//   teamMembers: [
//     { name: "Jane Doe", avatar: "/placeholder.svg?height=32&width=32" },
//     { name: "John Smith", avatar: "/placeholder.svg?height=32&width=32" },
//     { name: "Alice Johnson", avatar: "/placeholder.svg?height=32&width=32" },
//   ],
//   followers: 1500,
//   awards: 3,
//   videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   socialMedia: {
//     twitter: "https://twitter.com/ecotech",
//     linkedin: "https://linkedin.com/company/ecotech",
//     instagram: "https://instagram.com/ecotech",
//   },
//   documentation: {
//     businessPlan: "/business-plan.pdf",
//     pitchDeck: "/pitch-deck.pdf",
//   },
//   fundingGoal: {
//     amount: 500000,
//     currency: "USD",
//   },
//   milestones: [
//     { quarter: "Q1 2024", description: "Product prototype completion" },
//     { quarter: "Q2 2024", description: "Beta testing phase" },
//     { quarter: "Q3 2024", description: "Official product launch" },
//     { quarter: "Q4 2024", description: "Expand to international markets" },
//   ],
//   projectPhase: "Development",
// }

export default function ProjectPage({params}: any) {
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
                {project[params.projectInfo-1].fundingGoal.amount.toLocaleString()} {project[1].fundingGoal.currency}
              </div>
              <Progress value={33} className="mb-2" />
              <p className="text-sm text-muted-foreground">33% funded</p>
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