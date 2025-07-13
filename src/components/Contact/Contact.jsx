import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <section className="py-32 bg-primary-dark text-white">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-white text-3xl font-medium mb-2 leading-tight">
              Have a question? Prayer request?
            </h2>
            <p className="text-neutral-light text-xl">Drop us a note</p>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
