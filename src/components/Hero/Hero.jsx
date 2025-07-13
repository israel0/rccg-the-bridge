import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'

const Hero = () => {
  const phrases = [
    "Connecting the Word to the world",
    "Connect to Collect",
    "NIBI NI JESU WA",
    "WELCOME YOUR EXCELLENCY"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, 2500) // 2.5 seconds

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <section className="relative min-h-screen bg-primary-dark text-white overflow-hidden">
     
      <Header />

      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="/headers/home.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary-orange/20" />
      </div>

       <div className="relative z-10 container-max section-padding">
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <p className="text-white font-medium mb-6 uppercase tracking-wider">
      RCCG LIVING SEED CHURCH, THE BRIDGE
    </p>

    <div className="min-h-[120px] md:min-h-[140px] lg:min-h-[160px] overflow-hidden">
      <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl font-black leading-tight transition-opacity duration-500 ease-in-out">
        {phrases[currentIndex]}
      </h1>
    </div>
  </div>
</div>

    </section>
  )
}

export default Hero
