'use client'

import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="py-8 md:py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center text-primary-700">Subscribe to Our Newsletter</h2>
        <div className="max-w-md mx-auto">
          {subscribed ? (
            <p className="text-center text-lg md:text-xl text-secondary-600">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-full text-neutral-800 bg-white border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
              <button
                type="submit"
                className="bg-primary-500 text-white font-bold py-2 px-6 rounded-full hover:bg-primary-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter

