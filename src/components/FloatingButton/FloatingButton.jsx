import React from 'react'

const FloatingButton = () => {
  return (
    <button className="fixed bottom-8 right-8 w-15 h-15 bg-primary-orange rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 z-50">
      <img 
        src="/icons/floating-button.svg" 
        alt="Floating Action" 
        className="w-full h-full"
      />
    </button>
  )
}

export default FloatingButton
