import React, { useState } from 'react'
import Navigation from './Navigation'
import Logo from './Logo'
import ActionButtons from './ActionButtons'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
  <header className="relative z-50 bg-transparent">
  <div className="container-max section-padding">
    <div className="flex items-center justify-between py-3">
      <Navigation />
      <Logo />
      <ActionButtons />
    </div>
  </div>
</header>

  )
}

export default Header
