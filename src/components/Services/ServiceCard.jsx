import React, { useEffect, useRef } from 'react'

const ServiceCard = ({ service, index, activeIndex, setActiveIndex }) => {
  const isActive = index === activeIndex
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(index)
        }
      },
      { threshold: 0.5 }
    )

    const el = cardRef.current
    if (el) observer.observe(el)

    return () => el && observer.unobserve(el)
  }, [index, setActiveIndex])

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden flex flex-col lg:flex-row gap-6 transition-all duration-700 ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Dim overlay */}
      {!isActive && (
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none rounded-xl transition-all duration-500" />
      )}

      {/* Image */}
      <div className="relative z-20 lg:w-1/3">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-64 object-cover rounded-lg transition duration-500 ${
            isActive ? 'grayscale-0 brightness-100' : 'grayscale brightness-50'
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 lg:w-2/3 space-y-4">
        <h3
          className={`text-2xl font-semibold transition-colors duration-500 ${
            isActive ? 'text-white' : 'text-neutral-400'
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`transition-colors duration-500 ${
            isActive ? 'text-white' : 'text-neutral-400'
          }`}
        >
          {service.description}
        </p>
        <div className="flex gap-2 items-center">
          <img src={service.calendarIcon} alt="" className="w-5 h-5" />
          <span
            className={`transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-neutral-400'
            }`}
          >
            {service.schedule}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <img src={service.locationIcon} alt="" className="w-5 h-5" />
          <span
            className={`transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-neutral-400'
            }`}
          >
            {service.location}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
