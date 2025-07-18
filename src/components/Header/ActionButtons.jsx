import React from 'react'
import { Link } from "react-router-dom"

const ActionButtons = ({ mobile = false }) => {
  return (
    <div className={`${mobile ? 'flex flex-col space-y-4 w-full' : 'flex items-center gap-5'}`}>
      <Link 
        to="/giving" 
        className={`${mobile ? 'w-full' : ''}`}
      >
        <button className={`flex items-center justify-center gap-2 ${mobile ? 'w-full btn-secondary' : 'bg-gray-100 btn-secondary'}`}>
          <img 
            src="/icons/login-icon.svg" 
            alt="Giving" 
            className="w-5 h-5"
          />
          Giving
        </button>
      </Link>
      
      <Link 
        to="https://www.youtube.com/channel/UCcar23Or-AmJIGZZTEZZS1A" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${mobile ? 'w-full' : ''}`}
      >
        <button className={`flex items-center justify-center gap-2 ${mobile ? 'w-full btn-primary' : 'btn-primary'}`}>
          <img 
            src="/icons/signup-icon.svg" 
            alt="Watch Live" 
            className="w-5 h-5"
          />
          Watch Live
        </button>
      </Link>
    </div>
  )
}

export default ActionButtons