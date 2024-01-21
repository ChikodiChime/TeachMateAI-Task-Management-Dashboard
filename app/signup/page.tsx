"use client"
import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <>
    <a href='https://teachmateai.com/' className="flex flex-row gap-3 mb-10">
      <Image 
            width={40} 
            height={40} 
            layout='fixed'  
            src='/logo.png'
            alt='logo'
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}

            />
            <span className='text-3xl font-bold text-[#14213d]'>TeachMateAI</span>
      </a >
    <div className='flex items-center justify-center h-full'>
      
        <SignUp/>
    </div>
    </>
    
  )
}

export default page