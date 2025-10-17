import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Car, Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-dubai-blue" />
            <span className="text-2xl font-bold text-dubai-blue">DriveFlow</span>
            <span className="text-lg text-gray-600">Dubai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-dubai-blue transition-colors">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-dubai-blue transition-colors">
              Services
            </a>
            <a href="#fleet" className="text-gray-700 hover:text-dubai-blue transition-colors">
              Our Fleet
            </a>
            <a href="#about" className="text-gray-700 hover:text-dubai-blue transition-colors">
              About
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4 text-dubai-blue" />
              <span className="text-gray-600">+971 55 802 9149</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4 text-dubai-blue" />
              <span className="text-gray-600">driveflowdubai@gmail.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-dubai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-dubai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#fleet" 
                className="text-gray-700 hover:text-dubai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Fleet
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-dubai-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
