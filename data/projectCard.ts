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
    {
      id: "3",
      name: "EcoScan",
      creator: "GreenTech",
      category: "ENVIRONMENT",
      followers: 22,
      description: "EcoScan helps communities track and reduce their carbon footprint by providing real-time data and actionable insights.",
      teamMembers: [
        { name: "GT", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "JA", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 3,
    },
    {
      id: "4",
      name: "ChainGuard",
      creator: "Sarah Bennet",
      category: "SECURITY",
      followers: 19,
      description: "ChainGuard provides smart contract auditing tools and services, ensuring maximum security for decentralized applications.",
      teamMembers: [
        { name: "SB", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "ML", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "DK", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 4,
    },
    {
      id: "5",
      name: "HealthSync",
      creator: "MediTech",
      category: "HEALTH",
      followers: 35,
      description: "HealthSync bridges the gap between patients and healthcare providers using blockchain technology to securely store and share medical records.",
      teamMembers: [
        { name: "MT", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "KP", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "NM", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "WR", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 2,
    },
   
   
    
    // Add more projects here...
  ]
  

  export default projects;