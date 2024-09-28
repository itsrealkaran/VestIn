"use client"
import React from 'react'
import ProjectDetailsForm from './ProjectDetails'
import SocialMedia from './SocialMedia'
import FundingGoal from './FundingGoal'


function MainPage() {
  return (
    <div>
        <ProjectDetailsForm/>
        <SocialMedia/>
        <FundingGoal/>
      
    </div>
  )
}

export default MainPage
