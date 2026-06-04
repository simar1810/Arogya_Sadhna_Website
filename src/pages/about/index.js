import AboutDetails from '@/components/about/AboutDetails'
import AboutQualifications from '@/components/about/AboutQualifications'
import AboutStats from '@/components/about/AboutStats'
import Hero from '@/components/about/Hero'
import React from 'react'

const About = () => {
  return (
    <main>
      <Hero/>
      <AboutStats/>
      <AboutDetails/>
      <AboutQualifications/>
    </main>
  )
}

export default About
