import React from 'react'
import {Link}  from "react-router-dom"

const SermonCard = ({ sermon }) => {
  return (
    <article className="bg-card-bg border border-neutral-light/40 rounded-lg overflow-hidden">
      <div className="p-10">
        <img 
          src={sermon.image} 
          alt={sermon.title}
          className="w-full h-96 object-cover rounded-lg mb-5"
        />
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img 
              src={sermon.categoryIcon} 
              alt="Category" 
              className="w-6 h-6"
            />
            <span className="text-primary-light text-lg">{sermon.date}</span>
          </div>
          
          <h3 className="text-primary-gray text-xl font-medium leading-tight">
            {sermon.title}
          </h3>
          
          <div className="flex items-end gap-3 pt-2">
             <Link to={sermon.url}>
                 <span className="text-primary-orange text-xl">Watch live</span>
            <div className="w-6 h-6 flex items-center justify-center">
              <img 
                src="https://static.codia.ai/custom_image/2025-06-29/070305/arrow-icon-9.svg" 
                alt="Arrow" 
                className="w-4 h-3"
              />
            </div>
             </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SermonCard
