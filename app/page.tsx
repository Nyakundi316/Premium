'use client'
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProjectsSection from './components/ProjectsSection'
import WhoWeAre from './components/WhoWeAre'
import FeaturedProjectsSection from './components/FeaturedProjectsSection'
import TestimonialSection from './components/TestimonialSection'
import HowItWorks from './components/HowItWorks'
// import RequestQuoteSection from './components/RequestQuoteSection'
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <ProjectsSection />
      <WhyChooseUs />
      <FeaturedProjectsSection />
      <TestimonialSection />
      <HowItWorks />
      {/* <RequestQuoteSection /> */}
     
  
   

    </div>
  )
}
