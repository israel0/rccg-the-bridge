import React from 'react'

const Counselling = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/icons/hero-background-1.png" 
          alt="Counselling Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/80"></div>
      </div>
      
      <div className="relative z-10 container-max section-padding">
        <div className="max-w-2xl">
          <div className="space-y-12">
            <div className="space-y-5">
              <h2 className="text-white text-3xl font-medium text-center max-w-md">
                Our mission is soul care
              </h2>
              <p className="text-neutral-light text-xl leading-relaxed">
                At RCCG Living Seed Church, The Bridge, we believe that no one should walk alone through life's challenges. Our dedicated counselling ministry is here to offer a listening ear, prayerful support, and biblical guidance in times of need.
              </p>
            </div>
            
            <button className="btn-primary">
              Go to counselling
              <img 
                src="/icons/arrow-icon-9.svg" 
                alt="Arrow" 
                className="w-4 h-3"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counselling
