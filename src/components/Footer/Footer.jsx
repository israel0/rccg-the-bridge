import React from 'react'
import FooterLogo from './FooterLogo'
import FooterContent from './FooterContent'
import FooterContact from './FooterContact'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/gallery/bridgefooter.png" 
          alt="Background Texture" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container-max section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <FooterLogo />
          </div>
          
          <div className="space-y-8">
            <FooterContent />
            <FooterContact />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
