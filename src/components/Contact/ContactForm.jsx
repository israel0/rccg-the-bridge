import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="flex-1 px-3 py-3 bg-transparent border border-neutral-light/60 rounded-md text-neutral-medium placeholder-neutral-medium focus:outline-none focus:border-primary-orange transition-colors"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 px-3 py-3 bg-transparent border border-neutral-light/60 rounded-md text-neutral-medium placeholder-neutral-medium focus:outline-none focus:border-primary-orange transition-colors"
          required
        />
      </div>
      
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full px-3 py-3 bg-transparent border border-neutral-light/60 rounded-md text-neutral-medium placeholder-neutral-medium focus:outline-none focus:border-primary-orange transition-colors resize-none"
        required
      ></textarea>
      
      <button type="submit" className="btn-primary">
        Send
        <img 
          src="/icons/arrow-icon-11.svg" 
          alt="Arrow" 
          className="w-4 h-3"
        />
      </button>
    </form>
  )
}

export default ContactForm
