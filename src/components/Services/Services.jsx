// src/components/Services/Services.jsx
import React, { useEffect, useRef, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [firstInView, setFirstInView] = useState(false)
  const firstCardRef = useRef(null)

  const services = [
    {
      title: 'Sunday School',
      description: 'Guided by the RCCG Sunday School Manual...',
      schedule: 'Every Sunday • 7:30 AM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-1.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon.svg'
    },
    {
      title: 'Sunday Service',
      description: 'At The Bridge, Sunday isn\'t just a routine...',
      schedule: 'Every Sunday • 8:00 AM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-2.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon-2.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon-2.svg'
    },
    {
      title: 'Midweek Service',
      description: 'Midweek at The Bridge is your spiritual pit stop...',
      schedule: 'Every Wednesday • 6:00 PM - 7:30PM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-3.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon-3.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon-3.svg'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFirstInView(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    const el = firstCardRef.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [])

  return (
    <section className="py-20 bg-black text-white">
      <div className="container-max section-padding">
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-3">Encounter God in a whole new way!</h2>
          <p className="text-neutral-light text-xl">Find fire, fellowship, and fresh encounters.</p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              dimmed={!firstInView}
              cardRef={index === 0 ? firstCardRef : null}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
