import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Youtube, Twitter, Linkedin, Instagram, FileIcon, Trash2Icon } from "lucide-react"

interface DocumentItem {
  name: string
  status: string
  hasGenerateAI?: boolean
}

const documents: DocumentItem[] = [
  { name: "Business Plan", status: "Not provided", hasGenerateAI: true },
  { name: "Pitchdeck", status: "Not provided" },
]

export default function CombinedComponent() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Video and Social Media URL Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="video-url">Youtube or Loom URL *</Label>
          <div className="relative">
            <Youtube className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
            <Input
              id="video-url"
              placeholder="Paste your YouTube or Loom link here"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="twitter">Twitter</Label>
          <div className="relative">
            <Twitter className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
            <Input
              id="twitter"
              placeholder="Your Twitter profile URL"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <div className="relative">
            <Linkedin className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
            <Input
              id="linkedin"
              placeholder="Your LinkedIn profile URL"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="instagram">Instagram</Label>
          <div className="relative">
            <Instagram className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
            <Input
              id="instagram"
              placeholder="Your Instagram profile URL"
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Documentation Section with added margin-top */}
      <div className="mt-9"> 
        <h2 className="text-2xl font-bold mb-4 flex items-center ">
          <FileIcon className="mr-2" />
          Documentation
        </h2>
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center">
                <FileIcon className="mr-2" />
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-sm text-gray-500">{doc.status}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                {doc.hasGenerateAI && (
                  <Button variant="outline">Generate with AI</Button>
                )}
                <Button>Upload</Button>
                <Button variant="ghost" size="icon">
                  <Trash2Icon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
