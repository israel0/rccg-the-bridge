import React from 'react'
import { Link } from "react-router-dom"

const LogoDark = () => {
  return (
    <div className="flex items-center">
       <Link to="/">
          <div className="relative">
          <img 
          src="/logos/logo-black.png" 
          alt="RCCG Logo Part 1" 
          className="h-20 w-auto"
          />
          </div>
       </Link>
    </div>
  )
}

export default LogoDark
