import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = ({ isScrolledPastHero }) => {
  const navItems = [
     { label: 'Connect', path: '/connect' },
     { label: 'Branches', path: '/branches' },
     { label: 'About Us', path: '/about' }
  ]

  return (
    <nav className="hidden md:flex items-center gap-10">
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className="relative group h-[32px] inline-block overflow-hidden"
        >
          {/* Default Text */}
          <span
            className={`block transition-all duration-300 ${
              isScrolledPastHero ? 'text-primary-dark' : 'text-white'
            } group-hover:-translate-y-2 group-hover:opacity-0`}
          >
            {item.label}
          </span>

          {/* Hover Text (Orange) */}
          <span
            className="block absolute left-0 top-0 text-primary-orange opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
          >
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navigation
