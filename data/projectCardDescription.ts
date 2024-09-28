// interface Project {
//     id: string;
//     name: string;
//     creator: string;
//     category: string;
//     followers: number;
//     description: string;
//     teamMembers: { name: string; avatar: string }[];
//     awards: number;
//     longDescription?: string; // Optional long description
//     youtubeURL?: string; // Optional URL for video
//     twitter?: string; // Optional Twitter profile
//     linkedIn?: string; // Optional LinkedIn profile
//     instagram?: string; // Optional Instagram profile
//     documentation?: string; // Optional documentation
//     pitchDeck?: string; // Optional pitch deck
//     fundingGoal?: number; // Optional funding goal
//     milestones?: { quarter: string; description: string }[]; // Optional project milestones
//   }

  
//   const project: Project[] = { [
//     "projects": [
//       {
//         "id": "1",
//         "name": "deGuppe",
//         "creator": "quditwolf",
//         "theme": "PRIVACY",
//         "shortDescription": "Guppe is an open standard for interoperable, truly-decentralized peer run, real-time communication routed over TOR which s...",
//         "longDescription": "Guppe is an open standard for interoperable, truly-decentralized peer run, real-time communication routed over TOR which supports end-to-end encryption. It aims to provide a secure and private platform for users to communicate without relying on centralized servers.",
//         "teamMembers": [
//           { "name": "QW", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "JD", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "AD", "avatar": "/placeholder.svg?height=32&width=32" }
//         ],
//         "followers": 6,
//         "awards": 2,
//         "videoUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//         "socialMedia": {
//           "twitter": "https://twitter.com/deguppe",
//           "linkedin": "https://www.linkedin.com/company/deguppe",
//           "instagram": "https://www.instagram.com/deguppe"
//         },
//         "documentation": {
//           "businessPlan": "https://example.com/deguppe_business_plan.pdf",
//           "pitchDeck": "https://example.com/deguppe_pitch_deck.pdf"
//         },
//         "fundingGoal": {
//           "amount": 500000,
//           "currency": "USD"
//         },
//         "milestones": [
//           {
//             "quarter": "Q3 2024",
//             "description": "Launch beta version of the communication protocol"
//           },
//           {
//             "quarter": "Q4 2024",
//             "description": "Implement end-to-end encryption features"
//           },
//           {
//             "quarter": "Q1 2025",
//             "description": "Release stable version 1.0"
//           }
//         ],
//         "projectPhase": "Development"
//       },
//       {
//         "id": "2",
//         "name": "FeedstockPlus",
//         "creator": "Luis Duraes",
//         "theme": "AI",
//         "shortDescription": "FeedstockPlus is the platform for Bioenergy players to Connect, Source Feedstocks, and ensure Sustainability Compliance.",
//         "longDescription": "FeedstockPlus leverages artificial intelligence to optimize the sourcing and distribution of bioenergy feedstocks. Our platform connects suppliers with bioenergy producers, ensuring efficient supply chain management and compliance with sustainability standards.",
//         "teamMembers": [
//           { "name": "LD", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "JD", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "AD", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "KL", "avatar": "/placeholder.svg?height=32&width=32" }
//         ],
//         "followers": 12,
//         "awards": 1,
//         "videoUrl": "https://www.loom.com/share/1234567890abcdef1234567890abcdef",
//         "socialMedia": {
//           "twitter": "https://twitter.com/feedstockplus",
//           "linkedin": "https://www.linkedin.com/company/feedstockplus",
//           "instagram": "https://www.instagram.com/feedstockplus"
//         },
//         "documentation": {
//           "businessPlan": "https://example.com/feedstockplus_business_plan.pdf",
//           "pitchDeck": "https://example.com/feedstockplus_pitch_deck.pdf"
//         },
//         "fundingGoal": {
//           "amount": 750000,
//           "currency": "USD"
//         },
//         "milestones": [
//           {
//             "quarter": "Q4 2024",
//             "description": "Launch AI-powered feedstock matching algorithm"
//           },
//           {
//             "quarter": "Q2 2025",
//             "description": "Integrate blockchain for transparent supply chain tracking"
//           },
//           {
//             "quarter": "Q4 2025",
//             "description": "Expand platform to cover 50% of the European bioenergy market"
//           }
//         ],
//         "projectPhase": "Beta Testing"
//       },
//       {
//         "id": "3",
//         "name": "EcoScan",
//         "creator": "GreenTech",
//         "theme": "ENVIRONMENT",
//         "shortDescription": "EcoScan helps communities track and reduce their carbon footprint by providing real-time data and actionable insights.",
//         "longDescription": "EcoScan is a comprehensive platform that empowers communities to monitor and actively reduce their environmental impact. By leveraging IoT sensors, satellite data, and machine learning algorithms, EcoScan provides real-time analytics on various environmental factors, including air quality, water usage, and energy consumption. Our actionable insights enable local governments and citizens to make informed decisions and implement effective strategies for a sustainable future.",
//         "teamMembers": [
//           { "name": "GT", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "JA", "avatar": "/placeholder.svg?height=32&width=32" }
//         ],
//         "followers": 22,
//         "awards": 3,
//         "videoUrl": "https://www.youtube.com/watch?v=abcdefghijk",
//         "socialMedia": {
//           "twitter": "https://twitter.com/ecoscan",
//           "linkedin": "https://www.linkedin.com/company/ecoscan",
//           "instagram": "https://www.instagram.com/ecoscan"
//         },
//         "documentation": {
//           "businessPlan": "https://example.com/ecoscan_business_plan.pdf",
//           "pitchDeck": "https://example.com/ecoscan_pitch_deck.pdf"
//         },
//         "fundingGoal": {
//           "amount": 1000000,
//           "currency": "USD"
//         },
//         "milestones": [
//           {
//             "quarter": "Q2 2024",
//             "description": "Launch pilot program in 5 cities"
//           },
//           {
//             "quarter": "Q4 2024",
//             "description": "Integrate machine learning algorithms for predictive analytics"
//           },
//           {
//             "quarter": "Q2 2025",
//             "description": "Expand to 50 cities globally"
//           }
//         ],
//         "projectPhase": "Pilot Testing"
//       },
//       {
//         "id": "4",
//         "name": "ChainGuard",
//         "creator": "Sarah Bennet",
//         "theme": "SECURITY",
//         "shortDescription": "ChainGuard provides smart contract auditing tools and services, ensuring maximum security for decentralized applications.",
//         "longDescription": "ChainGuard is a cutting-edge platform that offers comprehensive security solutions for blockchain-based applications. Our suite of tools includes automated smart contract analysis, real-time monitoring of on-chain activities, and expert manual audits. By combining AI-driven vulnerability detection with human expertise, ChainGuard sets a new standard in blockchain security, helping developers and enterprises build trust in their decentralized applications.",
//         "teamMembers": [
//           { "name": "SB", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "ML", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "DK", "avatar": "/placeholder.svg?height=32&width=32" }
//         ],
//         "followers": 19,
//         "awards": 4,
//         "videoUrl": "https://www.loom.com/share/abcdefghijklmnopqrstuvwxyz",
//         "socialMedia": {
//           "twitter": "https://twitter.com/chainguard",
//           "linkedin": "https://www.linkedin.com/company/chainguard",
//           "instagram": "https://www.instagram.com/chainguard"
//         },
//         "documentation": {
//           "businessPlan": "https://example.com/chainguard_business_plan.pdf",
//           "pitchDeck": "https://example.com/chainguard_pitch_deck.pdf"
//         },
//         "fundingGoal": {
//           "amount": 2000000,
//           "currency": "USD"
//         },
//         "milestones": [
//           {
//             "quarter": "Q3 2024",
//             "description": "Release beta version of automated smart contract auditing tool"
//           },
//           {
//             "quarter": "Q1 2025",
//             "description": "Launch real-time monitoring dashboard for on-chain activities"
//           },
//           {
//             "quarter": "Q3 2025",
//             "description": "Establish partnerships with 5 major blockchain platforms"
//           }
//         ],
//         "projectPhase": "Development"
//       },
//       {
//         "id": "5",
//         "name": "HealthSync",
//         "creator": "MediTech",
//         "theme": "HEALTH",
//         "shortDescription": "HealthSync bridges the gap between patients and healthcare providers using blockchain technology to securely store and share medical records.",
//         "longDescription": "HealthSync is revolutionizing the healthcare industry by creating a secure, interoperable platform for managing and sharing medical records. Utilizing blockchain technology, we ensure the integrity and privacy of patient data while enabling seamless access for authorized healthcare providers. Our system incorporates AI-driven analytics to provide personalized health insights and improve patient outcomes. HealthSync aims to empower patients with control over their health data and facilitate more efficient, coordinated care across the healthcare ecosystem.",
//         "teamMembers": [
//           { "name": "MT", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "KP", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "NM", "avatar": "/placeholder.svg?height=32&width=32" },
//           { "name": "WR", "avatar": "/placeholder.svg?height=32&width=32" }
//         ],
//         "followers": 35,
//         "awards": 2,
//         "videoUrl": "https://www.youtube.com/watch?v=lmnopqrstuvw",
//         "socialMedia": {
//           "twitter": "https://twitter.com/healthsync",
//           "linkedin": "https://www.linkedin.com/company/healthsync",
//           "instagram": "https://www.instagram.com/healthsync"
//         },
//         "documentation": {
//           "businessPlan": "https://example.com/healthsync_business_plan.pdf",
//           "pitchDeck": "https://example.com/healthsync_pitch_deck.pdf"
//         },
//         "fundingGoal": {
//           "amount": 5000000,
//           "currency": "USD"
//         },
//         "milestones": [
//           {
//             "quarter": "Q4 2024",
//             "description": "Launch pilot program with 3 major hospitals"
//           },
//           {
//             "quarter": "Q2 2025",
//             "description": "Implement AI-driven health analytics feature"
//           },
//           {
//             "quarter": "Q4 2025",
//             "description": "Achieve HIPAA compliance and expand to 50 healthcare providers"
//           }
//         ],
//         "projectPhase": "Pilot Testing"
//       }
//     ]
//   }


// Project interface
interface Project {
    id: string;
    name: string;
    creator: string;
    theme: string;
    shortDescription: string;
    longDescription: string;
    teamMembers: { name: string; avatar: string }[];
    followers: number;
    awards: number;
    videoUrl: string;
    socialMedia: {
      twitter: string;
      linkedin: string;
      instagram: string;
    };
    documentation: {
      businessPlan: string;
      pitchDeck: string;
    };
    fundingGoal: {
      amount: number;
      currency: string;
    };
    milestones: { quarter: string; description: string }[];
    projectPhase: string;
  }
  
  // Project data
  const projects: Project[] = [
    {
      id: "1",
      name: "deGuppe",
      creator: "quditwolf",
      theme: "PRIVACY",
      shortDescription: "Guppe is an open standard for interoperable, truly-decentralized peer run, real-time communication routed over TOR which s...",
      longDescription: "Guppe is an open standard for interoperable, truly-decentralized peer run, real-time communication routed over TOR which supports end-to-end encryption. It aims to provide a secure and private platform for users to communicate without relying on centralized servers.",
      teamMembers: [
        { name: "QW", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "JD", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "AD", avatar: "/placeholder.svg?height=32&width=32" }
      ],
      followers: 6,
      awards: 2,
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      socialMedia: {
        twitter: "https://twitter.com/deguppe",
        linkedin: "https://www.linkedin.com/company/deguppe",
        instagram: "https://www.instagram.com/deguppe"
      },
      documentation: {
        businessPlan: "https://example.com/deguppe_business_plan.pdf",
        pitchDeck: "https://example.com/deguppe_pitch_deck.pdf"
      },
      fundingGoal: {
        amount: 500000,
        currency: "USD"
      },
      milestones: [
        {
          quarter: "Q3 2024",
          description: "Launch beta version of the communication protocol"
        },
        {
          quarter: "Q4 2024",
          description: "Implement end-to-end encryption features"
        },
        {
          quarter: "Q1 2025",
          description: "Release stable version 1.0"
        }
      ],
      projectPhase: "Development"
    },
    {
                "id": "2",
                "name": "FeedstockPlus",
                "creator": "Luis Duraes",
                "theme": "AI",
                "shortDescription": "FeedstockPlus is the platform for Bioenergy players to Connect, Source Feedstocks, and ensure Sustainability Compliance.",
                "longDescription": "FeedstockPlus leverages artificial intelligence to optimize the sourcing and distribution of bioenergy feedstocks. Our platform connects suppliers with bioenergy producers, ensuring efficient supply chain management and compliance with sustainability standards.",
                "teamMembers": [
                  { "name": "LD", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "JD", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "AD", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "KL", "avatar": "/placeholder.svg?height=32&width=32" }
                ],
                "followers": 12,
                "awards": 1,
                "videoUrl": "https://www.loom.com/share/1234567890abcdef1234567890abcdef",
                "socialMedia": {
                  "twitter": "https://twitter.com/feedstockplus",
                  "linkedin": "https://www.linkedin.com/company/feedstockplus",
                  "instagram": "https://www.instagram.com/feedstockplus"
                },
                "documentation": {
                  "businessPlan": "https://example.com/feedstockplus_business_plan.pdf",
                  "pitchDeck": "https://example.com/feedstockplus_pitch_deck.pdf"
                },
                "fundingGoal": {
                  "amount": 750000,
                  "currency": "USD"
                },
                "milestones": [
                  {
                    "quarter": "Q4 2024",
                    "description": "Launch AI-powered feedstock matching algorithm"
                  },
                  {
                    "quarter": "Q2 2025",
                    "description": "Integrate blockchain for transparent supply chain tracking"
                  },
                  {
                    "quarter": "Q4 2025",
                    "description": "Expand platform to cover 50% of the European bioenergy market"
                  }
                ],
                "projectPhase": "Beta Testing"
              },
              {
                "id": "3",
                "name": "EcoScan",
                "creator": "GreenTech",
                "theme": "ENVIRONMENT",
                "shortDescription": "EcoScan helps communities track and reduce their carbon footprint by providing real-time data and actionable insights.",
                "longDescription": "EcoScan is a comprehensive platform that empowers communities to monitor and actively reduce their environmental impact. By leveraging IoT sensors, satellite data, and machine learning algorithms, EcoScan provides real-time analytics on various environmental factors, including air quality, water usage, and energy consumption. Our actionable insights enable local governments and citizens to make informed decisions and implement effective strategies for a sustainable future.",
                "teamMembers": [
                  { "name": "GT", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "JA", "avatar": "/placeholder.svg?height=32&width=32" }
                ],
                "followers": 22,
                "awards": 3,
                "videoUrl": "https://www.youtube.com/watch?v=abcdefghijk",
                "socialMedia": {
                  "twitter": "https://twitter.com/ecoscan",
                  "linkedin": "https://www.linkedin.com/company/ecoscan",
                  "instagram": "https://www.instagram.com/ecoscan"
                },
                "documentation": {
                  "businessPlan": "https://example.com/ecoscan_business_plan.pdf",
                  "pitchDeck": "https://example.com/ecoscan_pitch_deck.pdf"
                },
                "fundingGoal": {
                  "amount": 1000000,
                  "currency": "USD"
                },
                "milestones": [
                  {
                    "quarter": "Q2 2024",
                    "description": "Launch pilot program in 5 cities"
                  },
                  {
                    "quarter": "Q4 2024",
                    "description": "Integrate machine learning algorithms for predictive analytics"
                  },
                  {
                    "quarter": "Q2 2025",
                    "description": "Expand to 50 cities globally"
                  }
                ],
                "projectPhase": "Pilot Testing"
              },
              {
                "id": "4",
                "name": "ChainGuard",
                "creator": "Sarah Bennet",
                "theme": "SECURITY",
                "shortDescription": "ChainGuard provides smart contract auditing tools and services, ensuring maximum security for decentralized applications.",
                "longDescription": "ChainGuard is a cutting-edge platform that offers comprehensive security solutions for blockchain-based applications. Our suite of tools includes automated smart contract analysis, real-time monitoring of on-chain activities, and expert manual audits. By combining AI-driven vulnerability detection with human expertise, ChainGuard sets a new standard in blockchain security, helping developers and enterprises build trust in their decentralized applications.",
                "teamMembers": [
                  { "name": "SB", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "ML", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "DK", "avatar": "/placeholder.svg?height=32&width=32" }
                ],
                "followers": 19,
                "awards": 4,
                "videoUrl": "https://www.loom.com/share/abcdefghijklmnopqrstuvwxyz",
                "socialMedia": {
                  "twitter": "https://twitter.com/chainguard",
                  "linkedin": "https://www.linkedin.com/company/chainguard",
                  "instagram": "https://www.instagram.com/chainguard"
                },
                "documentation": {
                  "businessPlan": "https://example.com/chainguard_business_plan.pdf",
                  "pitchDeck": "https://example.com/chainguard_pitch_deck.pdf"
                },
                "fundingGoal": {
                  "amount": 2000000,
                  "currency": "USD"
                },
                "milestones": [
                  {
                    "quarter": "Q3 2024",
                    "description": "Release beta version of automated smart contract auditing tool"
                  },
                  {
                    "quarter": "Q1 2025",
                    "description": "Launch real-time monitoring dashboard for on-chain activities"
                  },
                  {
                    "quarter": "Q3 2025",
                    "description": "Establish partnerships with 5 major blockchain platforms"
                  }
                ],
                "projectPhase": "Development"
              },
              {
                "id": "5",
                "name": "HealthSync",
                "creator": "MediTech",
                "theme": "HEALTH",
                "shortDescription": "HealthSync bridges the gap between patients and healthcare providers using blockchain technology to securely store and share medical records.",
                "longDescription": "HealthSync is revolutionizing the healthcare industry by creating a secure, interoperable platform for managing and sharing medical records. Utilizing blockchain technology, we ensure the integrity and privacy of patient data while enabling seamless access for authorized healthcare providers. Our system incorporates AI-driven analytics to provide personalized health insights and improve patient outcomes. HealthSync aims to empower patients with control over their health data and facilitate more efficient, coordinated care across the healthcare ecosystem.",
                "teamMembers": [
                  { "name": "MT", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "KP", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "NM", "avatar": "/placeholder.svg?height=32&width=32" },
                  { "name": "WR", "avatar": "/placeholder.svg?height=32&width=32" }
                ],
                "followers": 35,
                "awards": 2,
                "videoUrl": "https://www.youtube.com/watch?v=lmnopqrstuvw",
                "socialMedia": {
                  "twitter": "https://twitter.com/healthsync",
                  "linkedin": "https://www.linkedin.com/company/healthsync",
                  "instagram": "https://www.instagram.com/healthsync"
                },
                "documentation": {
                  "businessPlan": "https://example.com/healthsync_business_plan.pdf",
                  "pitchDeck": "https://example.com/healthsync_pitch_deck.pdf"
                },
                "fundingGoal": {
                  "amount": 5000000,
                  "currency": "USD"
                },
                "milestones": [
                  {
                    "quarter": "Q4 2024",
                    "description": "Launch pilot program with 3 major hospitals"
                  },
                  {
                    "quarter": "Q2 2025",
                    "description": "Implement AI-driven health analytics feature"
                  },
                  {
                    "quarter": "Q4 2025",
                    "description": "Achieve HIPAA compliance and expand to 50 healthcare providers"
                  }
                ],
                "projectPhase": "Pilot Testing"
              }
            ]

            export default projects