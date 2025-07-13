import React from 'react'
import { Link } from "react-router-dom"

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <h2 className="text-3xl md:text-4xl font-medium text-primary-dark">
              We exist to raise a generation of emerging leaders
            </h2>
            <div className="flex items-center gap-4">
              <img 
                src="/gallery/badge-1.png" 
                alt="Badge 1" 
                className="w-24 h-12 object-cover rounded"
              />
              <span className="text-3xl md:text-4xl font-medium text-primary-dark">heaven</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <span className="text-3xl md:text-4xl font-medium text-primary-dark">
              and earth. Anchored in heartfelt worship
            </span>
            <img 
              src="/gallery/badge-2.png" 
              alt="Badge 2" 
              className="w-24 h-12 object-cover rounded"
            />
            <span className="text-3xl md:text-4xl font-medium text-primary-dark">solid teaching and</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <span className="text-3xl md:text-4xl font-medium text-primary-dark">active discipleship</span>
            <span className="text-3xl md:text-4xl font-medium text-primary-dark">we redirect hearts back to God.</span>
            <img 
              src="/gallery/badge-3.png" 
              alt="Badge 3" 
              className="w-24 h-12 object-cover rounded"
            />
          </div>
          
          <div className="flex items-center justify-center gap-3">
             <Link to="/about"> <span className="text-2xl text-primary-orange">About us</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <img 
                src="/icons/arrow-icon-1.svg" 
                alt="Arrow" 
                className="w-4 h-3"
              />
            </div>
            
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
