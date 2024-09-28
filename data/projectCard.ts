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
    {
      id: "6",
      name: "AeroRoute",
      creator: "AeroSoft",
      category: "TRANSPORTATION",
      followers: 15,
      description: "AeroRoute optimizes air traffic routes using AI to reduce fuel consumption and improve efficiency in air transport logistics.",
      teamMembers: [
        { name: "AS", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "TR", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 1,
    },
    {
      id: "7",
      name: "CryptoVote",
      creator: "BlockTech",
      category: "GOVERNANCE",
      followers: 40,
      description: "CryptoVote is a decentralized voting platform that allows organizations to conduct secure, transparent elections using blockchain.",
      teamMembers: [
        { name: "BT", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "HF", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "LM", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 5,
    },
    {
      id: "8",
      name: "EduChain",
      creator: "LearnVerse",
      category: "EDUCATION",
      followers: 50,
      description: "EduChain is a blockchain-based platform that ensures credential verification and secure access to educational records.",
      teamMembers: [
        { name: "LV", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "JD", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "MC", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 4,
    },
    {
      id: "9",
      name: "AquaFarm",
      creator: "BioSolutions",
      category: "AGRICULTURE",
      followers: 18,
      description: "AquaFarm helps farmers optimize aquaculture processes using AI-driven tools for better yield and sustainability.",
      teamMembers: [
        { name: "BS", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "RG", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 2,
    },
    {
      id: "10",
      name: "AutoMinds",
      creator: "TechGear",
      category: "AUTOMOTIVE",
      followers: 28,
      description: "AutoMinds revolutionizes vehicle diagnostics and maintenance through IoT, enabling real-time data for predictive maintenance.",
      teamMembers: [
        { name: "TG", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "DW", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "MS", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      awards: 3,
    },
   
    
    // Add more projects here...
  ]
  

  export default projects;