'use client'
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PatternsGallery from './components/PatternsGallery'
import WhyChooseUs from './components/WhyChooseUs'
import ProjectsSection from './components/ProjectsSection'
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PatternsGallery />
      <WhyChooseUs />
      <ProjectsSection />
   

    </div>
  )
}
