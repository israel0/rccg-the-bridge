import React, { useEffect, useRef, useState } from 'react'

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0
  const cardRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.4 } // trigger when 40% visible
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col lg:flex-row items-start gap-12 transition-all duration-700 ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Dim overlay when not in view */}
      {!isInView && (
        <div className="absolute inset-0 bg-white/60 z-10 rounded-xl pointer-events-none transition-all duration-500" />
      )}

      {/* Image */}
      <div className="lg:w-1/3 relative z-20">
        <div className="relative">
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-80 object-cover rounded-lg transition duration-500 ${
              isInView ? 'brightness-100' : 'brightness-50 grayscale'
            }`}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 space-y-6 relative z-20 transition duration-500">
        <div className="border-b border-neutral-light/50 pb-6">
          <h3 className={`text-2xl font-normal mb-4 transition-colors duration-500 ${
            isInView ? 'text-white' : 'text-neutral-light'
          }`}>
            {service.title}
          </h3>

          <div className="space-y-4">
            <p className={`leading-relaxed whitespace-pre-line transition-colors duration-500 ${
              isInView ? 'text-white' : 'text-neutral-light'
            }`}>
              {service.description}
            </p>
            <div className="flex items-center gap-3">
              <span className={`transition-colors duration-500 ${
                isInView ? 'text-primary-orange' : 'text-neutral'
              }`}>
                Watch live
              </span>
              <img
                src="https://static.codia.ai/custom_image/2025-06-29/070305/arrow-icon-2.svg"
                alt="Arrow"
                className="w-3 h-2"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-5">
            <img src={service.locationIcon} alt="Location" className="w-5 h-5" />
            <div className="flex items-center gap-2">
              <span className={`transition-colors duration-500 ${
                isInView ? 'text-white' : 'text-neutral-light'
              }`}>
                {service.schedule.split(' • ')[0]}
              </span>
              <div className="w-2 h-2 bg-neutral-light rounded-full" />
              <span className={`transition-colors duration-500 ${
                isInView ? 'text-white' : 'text-neutral-light'
              }`}>
                {service.schedule.split(' • ')[1]}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <img src={service.calendarIcon} alt="Calendar" className="w-5 h-5" />
            <span className={`transition-colors duration-500 ${
              isInView ? 'text-white' : 'text-neutral-light'
            }`}>
              {service.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
