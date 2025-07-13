// components/HeaderScroll.js
import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationScroll from './NavigationScroll'
import LogoDark from './LogoDark'
import ActionButtons from './ActionButtons'

const HeaderScroll = ({ isScrolledPastHero }) => {
  const location = useLocation()

  const isHome = location.pathname === '/'
  const shouldHide = isHome && !isScrolledPastHero

  if (shouldHide) return null

  return (
    <header className="sticky top-0 z-50 bg-white text-primary-dark transition-all duration-300">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between py-3">
          <NavigationScroll />
          <LogoDark />
          <ActionButtons />
        </div>
      </div>
    </header>
  )
}

export default HeaderScroll
