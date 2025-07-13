import React from 'react'

const ServiceCard = ({ service, index }) => {
  const isEven = index % 2 === 0

  return (
    <div className={`flex flex-col lg:flex-row items-start gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      <div className="lg:w-1/3">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
      
      <div className="lg:w-2/3 space-y-6">
        <div className="border-b border-neutral-light/50 pb-6">
          <h3 className="text-2xl font-normal mb-4">{service.title}</h3>
          <div className="space-y-4">
            <p className="text-neutral-light leading-relaxed whitespace-pre-line">
              {service.description}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-primary-orange">Watch live</span>
              <div className="w-4 h-4 flex items-center justify-center">
                <img 
                  src="https://static.codia.ai/custom_image/2025-06-29/070305/arrow-icon-2.svg" 
                  alt="Arrow" 
                  className="w-3 h-2"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-5">
            <img 
              src={service.locationIcon} 
              alt="Location" 
              className="w-5 h-5"
            />
            <div className="flex items-center gap-2">
              <span className="text-neutral-light">{service.schedule.split(' • ')[0]}</span>
              <div className="w-2 h-2 bg-neutral-light rounded-full"></div>
              <span className="text-neutral-light">{service.schedule.split(' • ')[1]}</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img 
              src={service.calendarIcon} 
              alt="Calendar" 
              className="w-5 h-5"
            />
            <span className="text-white">{service.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
