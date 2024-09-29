"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface InvestorProfile {
  photo: string | null;
  name: string;
  professions: string[];
  company: string;
}

interface DeveloperProfile {
  name: string;
  bio: string;
  skills: string[];
  discord: string;
  linkedin: string;
  twitter: string;
  github: string;
  image: string | null;
}

interface ProfileContextProps {
  investorProfile: InvestorProfile | null;
  setInvestorProfile: (profile: InvestorProfile) => void;
  developerProfile: DeveloperProfile | null;
  setDeveloperProfile: (profile: DeveloperProfile) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [investorProfile, setInvestorProfile] = useState<InvestorProfile | null>(null);
  const [developerProfile, setDeveloperProfile] = useState<DeveloperProfile | null>(null);

  useEffect(() => {
    const storedInvestorProfile = localStorage.getItem('investorProfile');
    if (storedInvestorProfile) {
      setInvestorProfile(JSON.parse(storedInvestorProfile));
    }

    const storedDeveloperProfile = localStorage.getItem('developerProfile');
    if (storedDeveloperProfile) {
      setDeveloperProfile(JSON.parse(storedDeveloperProfile));
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ investorProfile, setInvestorProfile, developerProfile, setDeveloperProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};