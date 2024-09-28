import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Award } from "lucide-react"

interface TeamMember {
  name: string;
  avatar: string;
}

interface FeedstockPlusCardProps {
  name: string;
  founder: string;
  description: string;
  followers: number;
  teamMembers: TeamMember[];
  awards: number;
}

export default function Component({ 
  name = "FeedstockPlus",
  founder = "Luis Duraes",
  description = "FeedstockPlus is the platform for Bioenergy players to Connect, Source Feedstocks, and ensure Sustainability Compliance.",
  followers = 12,
  teamMembers = [
    { name: "LM", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "JD", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "AD", avatar: "/placeholder.svg?height=32&width=32" },
  ],
  awards = 1
}: FeedstockPlusCardProps) {
  return (
    <Card className="w-[400px] bg-white shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex flex-col">
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
          <p className="text-sm text-gray-500">by {founder}</p>
        </div>
        <Heart className="h-6 w-6 text-gray-300 cursor-pointer" />
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">AI</span>
          <span className="text-sm text-gray-500">{followers} followers</span>
        </div>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">{teamMembers.length} Team Members</span>
            <div className="flex -space-x-2">
              {teamMembers.map((member, index) => (
                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name}</AvatarFallback>
                </Avatar>
              ))}
              {teamMembers.length > 3 && (
                <Avatar className="w-8 h-8 border-2 border-white bg-gray-200">
                  <AvatarFallback>+{teamMembers.length - 3}</AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">{awards} Award</span>
            <Award className="h-5 w-5 text-yellow-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}