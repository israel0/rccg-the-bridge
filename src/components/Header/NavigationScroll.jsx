import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Connect', path: '/connect' },
  { label: 'Branches', path: '/branches' },
  { label: 'About Us', path: '/about' }
]

export default function NavigationScroll() {
  return (
    <nav className="flex space-x-6">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium ${isActive ? 'text-primary-dark underline' : 'text-gray-600 hover:text-primary-dark'}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
