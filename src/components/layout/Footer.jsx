import React from 'react'
import { Link } from 'react-router-dom'
import { Car, Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white text-glow">DriveFlow</span>
              <span className="text-lg text-cyan-400">Dubai</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium car rental service in Dubai. Experience luxury, comfort, and reliability with our premium fleet.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-gray-400 hover:text-white transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Luxury Car Rental</li>
              <li className="text-gray-400">Airport Pickup</li>
              <li className="text-gray-400">Chauffeur Service</li>
              <li className="text-gray-400">Long-term Rental</li>
              <li className="text-gray-400">Corporate Solutions</li>
              <li className="text-gray-400">Event Transportation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-400">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-400">{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-400">{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DriveFlow Dubai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
