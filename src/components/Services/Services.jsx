import React, { useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(-1) // -1 = all dimmed on load

  const services = [
    {
      title: 'Sunday School',
      description: 'Guided by the RCCG Sunday School Manual...',
      schedule: 'Every Sunday • 7:30 AM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-1.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon.svg',
    },
    {
      title: 'Sunday Service',
      description: "At The Bridge, Sunday isn't just a routine...",
      schedule: 'Every Sunday • 8:00 AM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-2.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon-2.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon-2.svg',
    },
    {
      title: 'Midweek Service',
      description: 'Midweek at The Bridge is your spiritual pit stop...',
      schedule: 'Every Wednesday • 6:00 PM - 7:30PM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-3.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon-3.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon-3.svg',
    },
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container max-w-6xl mx-auto px-4 space-y-16">
        <div>
          <h2 className="text-3xl font-bold mb-3">Encounter God in a whole new way!</h2>
          <p className="text-neutral-400 text-xl">Find fire, fellowship, and fresh encounters.</p>
        </div>

        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
