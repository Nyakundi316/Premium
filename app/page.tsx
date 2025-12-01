'use client'
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PatternsGallery from './components/PatternsGallery'
import WhyChooseUs from './components/WhyChooseUs'
import ProjectsSection from './components/ProjectsSection'
// import PricingTable from './components/PricingTable'
// import Footer from './components/Footer'
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PatternsGallery />
      <WhyChooseUs />
      <ProjectsSection />
      {/* <PricingTable /> */}
      {/* <Footer />   */}

    </div>
  )
}
