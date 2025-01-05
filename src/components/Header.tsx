'use client'

import Link from 'next/link'
import { useState } from 'react'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-secondary-200 text-primary-600 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary-600">PakistanTravels</Link>
          <button 
            className="md:hidden text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className={`md:flex space-y-2 md:space-y-0 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-primary-100 md:bg-transparent p-4 md:p-0`}>
            <li><Link href="/" className="block hover:text-secondary-500 transition duration-300">Home</Link></li>
            <li><Link href="/blogs" className="block hover:text-secondary-500 transition duration-300">Blog</Link></li>
            <li><Link href="/destination" className="block hover:text-secondary-500 transition duration-300">Destinations</Link></li>
            <li><Link href="/about" className="block hover:text-secondary-500 transition duration-300">About</Link></li>
            <li><Link href="/contact" className="block hover:text-secondary-500 transition duration-300">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

