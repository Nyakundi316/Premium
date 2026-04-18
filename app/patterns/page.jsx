import React from 'react'
import HeroSection from './HeroSection'
import PatternSection from './PatternSection'

export default function page() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0C10]">
      <HeroSection />
      <PatternSection />
    </main>
  )
}
