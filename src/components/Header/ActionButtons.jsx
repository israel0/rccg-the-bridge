import React from 'react'

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-5">
      <button className="bg-gray-100 btn-secondary">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-29/070305/login-icon.svg" 
          alt="Login" 
          className="w-5 h-5"
        />
        Giving
      </button>
      <button className="btn-primary">
        <img 
          src="https://static.codia.ai/custom_image/2025-06-29/070305/signup-icon.svg" 
          alt="Watch Live" 
          className="w-5 h-5"
        />
        Watch live
      </button>
    </div>
  )
}

export default ActionButtons
