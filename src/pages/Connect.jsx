import React from 'react'
import MissionScreen from '../components/MissionScreen'

export default function Connect() {
  return (
      <div className="bg-black mx-auto">
       <section className="container-max section-padding py-100 px-100 mx-auto text-white min-h-screen p-10">
      {/* First row with two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300">
            We are a faith-driven community focused on spiritual growth and service...
          </p>
        </div>
        <div></div>
      </div>

      {/* Second row: Form */}
      <div>
        <form className="space-y-8">

          {/* How do we help you */}
          <div>
            <h2 className="text-sm uppercase text-gray-400 mb-1">How do we help you?</h2>
            <div className="border-b border-gray-500">
              <select className="w-full bg-black text-white outline-none px-0 py-2">
                <option>Select an option</option>
                <option>Prayer Request</option>
                <option>Need Counseling</option>
                <option>Join the Community</option>
              </select>
            </div>
          </div>

          {/* Firstname and Lastname side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-b border-gray-500">
              <label className="block text-sm text-gray-400">First Name</label>
              <input
                type="text"
                className="w-full bg-black text-white outline-none py-1"
              />
            </div>
            <div className="border-b border-gray-500">
              <label className="block text-sm text-gray-400">Last Name</label>
              <input
                type="text"
                className="w-full bg-black text-white outline-none py-1"
              />
            </div>
          </div>

          {/* Email */}
          <div className="border-b border-gray-500">
            <label className="block text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="w-full bg-black text-white outline-none py-1"
            />
          </div>

          {/* Message */}
          <div className="border-b border-gray-500">
            <label className="block text-sm text-gray-400">Message</label>
            <textarea
              rows="4"
              className="w-full bg-black text-white outline-none py-1 resize-none"
            ></textarea>
          </div>
        </form>
      </div>
    </section>


      </div>



  )
}
