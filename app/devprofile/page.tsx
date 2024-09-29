"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useProfile } from "@/context/ProfileContext";
import Image from "next/image";

export default function DeveloperComponent() {
  const { setDeveloperProfile } = useProfile();
  const router = useRouter();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSkillInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentSkill.trim() !== '') {
      e.preventDefault();
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    const developerProfile = { name, bio, skills, discord, linkedin, twitter, github, image };
    localStorage.setItem('developerProfile', JSON.stringify(developerProfile));
    setDeveloperProfile(developerProfile);
    console.log(developerProfile);
    // Simulate a delay for the loader
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push('/projects');
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 mb-5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Developer Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="relative w-32 h-32 overflow-hidden rounded-full bg-gray-100">
            {image ? (
              <Image src={image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            )}
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Write a short bio about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="skills">Skills</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-sm bg-primary text-primary-foreground rounded flex items-center"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 focus:outline-none"
                  aria-label={`Remove ${skill} skill`}
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
          <Input
            id="skills"
            placeholder="Enter a skill and press Enter"
            value={currentSkill}
            onChange={(e) => setCurrentSkill(e.target.value)}
            onKeyDown={handleSkillInput}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="discord">Discord</Label>
          <Input
            id="discord"
            placeholder="Your Discord username"
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            placeholder="Your LinkedIn profile URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            placeholder="Your Twitter handle"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            placeholder="Your GitHub username"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required
          />
        </div>
        <Button onClick={handleSave} className="w-full" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Profile"}
        </Button>
      </CardContent>
    </div>
  );
}