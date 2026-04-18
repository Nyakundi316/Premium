import React from 'react'
import HeroSection from './HeroSection'
import PatternSection from './PatternSection'

export default function page() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PatternSection />
    </main>
  )
}
