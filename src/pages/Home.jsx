// src/pages/Home.js
import React from 'react'

import Hero from '../components/Hero/Hero'
import Mission from '../components/Mission/Mission'
import Services from '../components/Services/Services'
import Sermons from '../components/Sermons/Sermons'
import MissionScreen from '../components/MissionScreen'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <Sermons />
      <MissionScreen />
      <Contact />
    </main>
  )
}
