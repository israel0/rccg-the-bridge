import React from 'react'
import SermonCard from './SermonCard'
import {Link } from "react-router-dom"

const Sermons = () => {
  const sermons = [
    {
      date: 'April 20, 2025',
      url: "https://www.youtube.com/watch?v=TMx40iRLOOw",
      title: 'Lorem ipsum dolor sit amet consectetur. Purus odio a cras tellus morbi. Est vel eleifend ipsum',
      image: '/sermon/card-image-4.png',
      categoryIcon: '/icons/date-icon.svg'
    },
    {
      date: 'April 20, 2025',
      url: "https://www.youtube.com/watch?v=TMx40iRLOOw",
      title: 'Lorem ipsum dolor sit amet consectetur. Purus odio a cras tellus morbi. Est vel eleifend ipsum',
     image: '/sermon/card-image-4.png',
      categoryIcon: '/icons/date-icon.svg'
    },
    {
      date: 'April 20, 2025',
      url: "https://www.youtube.com/watch?v=TMx40iRLOOw",
      title: 'Lorem ipsum dolor sit amet consectetur. Purus odio a cras tellus morbi. Est vel eleifend ipsum',
      image: '/sermon/card-image-4.png',
      categoryIcon: '/icons/date-icon.svg'
    },
    {
      date: 'April 20, 2025',
      url: "https://www.youtube.com/watch?v=TMx40iRLOOw",
      title: 'Lorem ipsum dolor sit amet consectetur. Purus odio a cras tellus morbi. Est vel eleifend ipsum',
      image: '/sermon/card-image-4.png',
      categoryIcon: '/icons/date-icon.svg'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl font-medium text-primary-gray mb-3">
              Sunday services for the month
            </h2>
            <p className="text-primary-light text-xl">
              We'd love to welcome you in person or online!
            </p>
          </div>
           <Link to="https://www.youtube.com/@rccgthebridge">
                <button className="btn-primary mt-6 lg:mt-0">
                View all sermons
                <img 
                src="/icons/arrow-icon-10.svg" 
                alt="Arrow" 
                className="w-3 h-2"
                />
                </button>
           </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sermons.map((sermon, index) => (
            <SermonCard key={index} sermon={sermon} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sermons
