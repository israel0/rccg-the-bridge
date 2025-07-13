import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const services = [
    {
      title: 'Sunday School',
      description: 'Guided by the RCCG Sunday School Manual, we explore the treasures in Scripture in a way that speaks to real-life challenges- identity, purpose, relationships, and more. It\'s not just teaching; it\'s transformation. Come ready to ask questions, share insights, and build a solid understanding of God\'s Word. Don\'t miss Sunday School!',
      schedule: 'Every Sunday • 7:30 AM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-1.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon.svg'
    },
    {
      title: 'Sunday Service',
      description: 'At The Bridge, Sunday isn\'t just a routine, it\'s an encounter!\nFrom spirit-lifting praise and worship to truth-packed sermons, the atmosphere is charged up to draw you closer to God and connect you with a thriving community of young believers.\nCome as you are—but don\'t expect to leave the same.',
      schedule: 'Every Sunday • 8:00 AM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-2.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon-2.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon-2.svg'
    },
    {
      title: 'Midweek Service',
      description: 'Midweek at The Bridge is your spiritual pit stop—a time to pause, reflect, and refuel. Through deep Bible study, heartfelt worship, and honest conversations, we tackle life\'s complexities with faith and wisdom. It\'s the midweek boost you didn\'t know you needed.',
      schedule: 'Every Wednesday • 6:00 PM - 7:30PM',
      location: 'Lagos Airport Hotel, Ikeja, Lagos',
      image: 'https://static.codia.ai/custom_image/2025-06-29/070305/feature-image-3.png',
      locationIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/location-icon-3.svg',
      calendarIcon: 'https://static.codia.ai/custom_image/2025-06-29/070305/calendar-icon-3.svg'
    }
  ]

  return (
    <section className="py-20 bg-primary-dark text-white">
      <div className="container-max section-padding">
        <div className="mb-16">
          <h2 className="text-3xl font-medium mb-3">Encounter God in a whole new way!</h2>
          <p className="text-neutral-light text-xl">Find fire, fellowship, and fresh encounters.</p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
