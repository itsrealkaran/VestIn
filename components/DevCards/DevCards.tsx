import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Award } from "lucide-react"

interface Project {
  id: string
  name: string
  creator: string
  category: string
  followers: number
  description: string
  teamMembers: { name: string; avatar: string }[]
  awards: number
}

const projects: Project[] = [
  {
    id: "1",
    name: "deGuppe",
    creator: "quditwolf",
    category: "PRIVACY",
    followers: 6,
    description: "Guppe is an open standard for interoperable, truly-decentralized peer run, real-time communication routed over TOR which s...",
    teamMembers: [
      { name: "QW", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "JD", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "AD", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    awards: 2,
  },
  {
    id: "2",
    name: "FeedstockPlus",
    creator: "Luis Duraes",
    category: "AI",
    followers: 12,
    description: "FeedstockPlus is the platform for Bioenergy players to Connect, Source Feedstocks, and ensure Sustainability Compliance.",
    teamMembers: [
      { name: "LD", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "JD", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "AD", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "KL", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    awards: 1,
  },
  // Add more projects here...
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${project.name[0]}`} alt={project.name} />
            <AvatarFallback>{project.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
            <p className="text-sm text-muted-foreground">by {project.creator}</p>
          </div>
        </div>
        <Heart className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
            {project.category}
          </span>
          <span className="text-sm text-muted-foreground">{project.followers} followers</span>
        </div>
        <p className="mb-4 text-sm">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{project.teamMembers.length} Team Members</span>
            <div className="flex -space-x-2">
              {project.teamMembers.slice(0, 3).map((member, index) => (
                <Avatar key={index} className="h-6 w-6 border-2 border-background">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name}</AvatarFallback>
                </Avatar>
              ))}
              {project.teamMembers.length > 3 && (
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback>+{project.teamMembers.length - 3}</AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm text-muted-foreground">{project.awards}</span>
            <Award className="h-4 w-4 text-yellow-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function BrowseProjects() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Browse Projects</h1>
        <Button>Create Project</Button>
      </div>
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by Relevance" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevance</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="ai">AI</SelectItem>
            <SelectItem value="privacy">Privacy</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {/* Add more filter options here */}
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {/* Add more filter options here */}
          </SelectContent>
        </Select>
        <div className="flex-grow">
          <Input type="search" placeholder="Search by name..." className="w-full" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}