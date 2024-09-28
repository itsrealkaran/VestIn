import { param } from 'framer-motion/client'
import React from 'react'



export default function page({params}:any) {

  return (
    <div>
        
      {params.projectInfo}
    </div>
  )
}
