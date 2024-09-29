// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
// import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
// import project from "@/data/projectCard"
// import Link from "next/link"
// import { Heart, Award } from "lucide-react"


// interface Project {
//     id: string
//     name: string
//     creator: string
//     category: string
//     followers: number
//     description: string
//     teamMembers: { name: string; avatar: string }[]
//     awards: number
//   }
  

// export default function DevProfilePage() {
//   // This would typically come from a database or API
  // const profile = {
  //   name: "Jane Doe",
  //   avatarUrl: "/placeholder.svg?height=200&width=200",
  //   bio: "Full-stack developer with a passion for creating intuitive and efficient web applications. Experienced in React, Node.js, and Python. Always eager to learn new technologies and solve complex problems.",
  //   skills: ["React", "Node.js", "Python", "TypeScript", "GraphQL", "Docker"],
  //   discord: "janedoe#1234",
  //   linkedin: "jane-doe",
  //   twitter: "janedoedev",
  //   github: "janedoe",
  //   projects: [
  //     { name: "Project Alpha", description: "A React-based dashboard for data visualization", link: "https://project-alpha.com" },
  //     { name: "Beta API", description: "RESTful API built with Node.js and Express", link: "https://beta-api.com" },
  //     { name: "Gamma App", description: "Mobile app for task management using React Native", link: "https://gamma-app.com" },
  //   ]
  // }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="w-full max-w-4xl mx-auto">
//         <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <Avatar className="w-32 h-32 sm:w-40 sm:h-40">
//             <AvatarImage src={profile.avatarUrl} alt={profile.name} />
//             <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//           </Avatar>
//           <div className="text-center sm:text-left">
//             <CardTitle className="text-3xl font-bold">{profile.name}</CardTitle>
            
//             <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
//               <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
//                 <GithubIcon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
//               </a>
//               <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
//                 <LinkedinIcon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
//               </a>
//               <a href={`https://twitter.com/${profile.twitter}`} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
//                 <TwitterIcon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
//               </a>
//             </div>
//           </div>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <section>
//             <h2 className="text-2xl font-semibold mb-2">About Me</h2>
//             <p className="text-muted-foreground">{profile.bio}</p>
//           </section>
//           <section>
//             <h2 className="text-2xl font-semibold mb-2">Skills</h2>
//             <div className="flex flex-wrap gap-2">
//               {profile.skills.map(skill => (
//                 <Badge key={skill} variant="secondary">{skill}</Badge>
//               ))}
//             </div>
//           </section>
//           <section>
//             <h2 className="text-2xl font-semibold mb-4">Projects</h2>
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {project.map((project) => (
//           <Link key ={project.id} href={`./projects/${project.id}`}>
//           <ProjectCard key={project.id} project={project} />
//           </Link>
//         ))}
//             </div>
//           </section>
//         </CardContent>
//       </div>
//     </div>
//   )
// }



// function ProjectCard({ project }: { project: Project }) {
//     return (
//       <Card className="h-full">
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <div className="flex items-center space-x-2">
//             <Avatar className="h-10 w-10">
//               <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${project.name[0]}`} alt={project.name} />
//               <AvatarFallback>{project.name[0]}</AvatarFallback>
//             </Avatar>
//             <div>
//               <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
//               <p className="text-sm text-muted-foreground">by {project.creator}</p>
//             </div>
//           </div>
//           <Heart className="h-5 w-5 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="mb-4 flex items-center justify-between">
//             <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
//               {project.category}
//             </span>
//             <span className="text-sm text-muted-foreground">{project.followers} followers</span>
//           </div>
//           <p className="mb-4 text-sm">{project.description}</p>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <span className="text-sm text-muted-foreground">{project.teamMembers.length} Team Members</span>
//               <div className="flex -space-x-2">
//                 {project.teamMembers.slice(0, 3).map((member, index) => (
//                   <Avatar key={index} className="h-6 w-6 border-2 border-background">
//                     <AvatarImage src={member.avatar} alt={member.name} />
//                     <AvatarFallback>{member.name}</AvatarFallback>
//                   </Avatar>
//                 ))}
//                 {project.teamMembers.length > 3 && (
//                   <Avatar className="h-6 w-6 border-2 border-background">
//                     <AvatarFallback>+{project.teamMembers.length - 3}</AvatarFallback>
//                   </Avatar>
//                 )}
//               </div>
//             </div>
//             <div className="flex items-center space-x-1">
//               <span className="text-sm text-muted-foreground">{project.awards}</span>
//               <Award className="h-4 w-4 text-yellow-400" />
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     )
//   }
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import project from "@/data/projectCard";
import Link from "next/link";
import { Heart, Award } from "lucide-react";
import { useProfile } from "@/context/ProfileContext";

interface Project {
  id: string;
  name: string;
  creator: string;
  category: string;
  followers: number;
  description: string;
  teamMembers: { name: string; avatar: string }[];
  awards: number;
}

export default function DevProfilePage() {
  const { developerProfile } = useProfile();

  if (!developerProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Avatar className="w-32 h-32 sm:w-40 sm:h-40">
            <AvatarImage src={developerProfile.image || "/placeholder.svg?height=200&width=200"} alt={developerProfile.name} />
            <AvatarFallback>{developerProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl font-bold">{developerProfile.name}</CardTitle>
            <div className="flex space-x-4 mt-4 justify-center sm:justify-start">
              <a href={`https://github.com/${developerProfile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <GithubIcon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
              </a>
              <a href={`https://linkedin.com/in/${developerProfile.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <LinkedinIcon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
              </a>
              <a href={`https://twitter.com/${developerProfile.twitter}`} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                <TwitterIcon className="w-6 h-6 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-muted-foreground">{developerProfile.bio}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              
                <Badge  variant="secondary">React</Badge>
                <Badge  variant="secondary">Node.js</Badge>
                <Badge  variant="secondary">Python</Badge>
                <Badge  variant="secondary">Solidity</Badge>
                <Badge  variant="secondary">System Architecture</Badge>
           
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <ProjectCard key={project.id} project={project} />
                </Link>
              ))}
            </div>
          </section>
        </CardContent>
      </div>
    </div>
  );
}

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
          < span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
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
  );
}