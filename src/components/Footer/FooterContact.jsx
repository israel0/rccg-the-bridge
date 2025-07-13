import React from 'react'

const FooterContact = () => {
  const contactInfo = [
    {
      icon: 'https://static.codia.ai/custom_image/2025-06-29/070305/phone-icon.svg',
      text: '234-913-422-2220'
    },
    {
      icon: 'https://static.codia.ai/custom_image/2025-06-29/070305/email-icon.svg',
      text: 'admin@rccgthebridge.com'
    },
    {
      icon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-pin-icon.svg',
      text: 'Lagos Airport Hotel, Ikeja.'
    }
  ]

  const socialLinks = [
    {
      icon: 'https://static.codia.ai/custom_image/2025-06-29/070305/social-icon-1.svg',
      href: '#'
    },
    {
      icon: 'https://static.codia.ai/custom_image/2025-06-29/070305/social-icon-2.svg',
      href: '#'
    },
    {
      icon: 'https://static.codia.ai/custom_image/2025-06-29/070305/social-icon-3.svg',
      href: '#'
    }
  ]

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8">
      <div className="space-y-5">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img 
              src={item.icon} 
              alt="Contact Icon" 
              className="w-5 h-5"
            />
            <span className="text-neutral-light">{item.text}</span>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href}
            className="w-6 h-6 hover:opacity-80 transition-opacity"
          >
            <img 
              src={link.icon} 
              alt="Social Icon" 
              className="w-full h-full"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterContact
