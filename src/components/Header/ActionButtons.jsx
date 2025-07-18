import React from 'react'
import {Link} from "react-router-dom"

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-5">
    <Link to="/giving">
     <button className="bg-gray-100 btn-secondary">
        <img 
          src="/icons/login-icon.svg" 
          alt="Login" 
          className="w-5 h-5"
        />
        Giving
      </button>
    
     </Link>
      <Link to="https://www.youtube.com/channel/UCcar23Or-AmJIGZZTEZZS1A">
       <button className="btn-primary">
        <img 
          src="/icons/signup-icon.svg" 
          alt="Watch Live" 
          className="w-5 h-5"
        />
        Watch live
      </button>
      </Link>
    </div>
  )
}

export default ActionButtons
