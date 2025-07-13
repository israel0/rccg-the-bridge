import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import HeaderScroll from './components/Header/HeaderScroll'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import About from './pages/About'
import ContactPage from './pages/Connect'
import Branches from './pages/Branches'
import Giving from './pages/Giving'
import Department from './pages/Department'

function AppContent() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const sentinelRef = useRef()
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isGiving = location.pathname === '/giving'

  useEffect(() => {
    if (!isHome) {
      setScrolledPastHero(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolledPastHero(!entry.isIntersecting),
      { threshold: 0.01 }
    )

    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current)
    }
  }, [isHome])

  return (
    <div className="min-h-screen bg-neutral-bg">
      <HeaderScroll isScrolledPastHero={scrolledPastHero} />
      {isHome && <div ref={sentinelRef} className="h-[1px]" />}
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<ContactPage />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/department"  element={<Department/>} />

      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
