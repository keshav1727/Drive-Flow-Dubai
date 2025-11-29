import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Car, 
  Shield, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  Award,
  Zap
} from 'lucide-react'
import BookingForm from '../components/forms/BookingForm'
import EnquiryDialog from '../components/forms/EnquiryDialog'
import { categories } from '../data/cars'
import { openPhone } from '../utils'

const Home = () => {
  const [enquiryDialog, setEnquiryDialog] = useState({ isOpen: false, carName: '' })


  const closeEnquiryDialog = () => {
    setEnquiryDialog({ isOpen: false, carName: '' })
  }

  const handleCall = () => {
    openPhone()
  }


  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Hero Section */}
      <section className="premium-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-glow">
                Premium Car Rental in Dubai
              </h1>
              <p className="text-xl mb-8 text-cyan-100">
                Experience luxury and comfort with DriveFlow Dubai's premium fleet. 
                From business trips to leisure drives, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#fleet" className="btn-primary text-center">
                  View Our Fleet
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 cyber-glow">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-glow">Our Services</h2>
            <p className="text-xl text-gray-300">Comprehensive car rental solutions for every need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <Car className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Luxury Car Rental</h3>
              <p className="text-gray-300">Premium vehicles for special occasions and business meetings</p>
            </div>
            
            <div className="card text-center">
              <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Full Insurance</h3>
              <p className="text-gray-300">Comprehensive coverage for peace of mind during your journey</p>
            </div>
            
            <div className="card text-center">
              <Clock className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock assistance whenever you need us</p>
            </div>
            
            <div className="card text-center">
              <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Airport Pickup/Drop-off</h3>
              <p className="text-gray-300">Convenient pickup and drop-off at Dubai International Airport</p>
            </div>
            
            <div className="card text-center">
              <MapPin className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Anywhere Pickup & Drop-off</h3>
              <p className="text-gray-300">Convenient pickup and drop-off at any location across Dubai</p>
            </div>
            
            <div className="card text-center">
              <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">Quick Booking</h3>
              <p className="text-gray-300">Easy online booking with instant confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-glow">Browse by Category</h2>
            <p className="text-xl text-gray-300">Sports • SUV • Premium • Budget</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link key={cat.slug} to={`/category/${cat.slug}`} className="card hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                <div className="h-40 rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{cat.name}</span>
                </div>
                <div className="flex justify-center">
                  <span className="text-cyan-400 text-sm">View {cat.name} cars →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-glow">Why Choose DriveFlow Dubai?</h2>
            <p className="text-xl text-gray-300">We're committed to providing the best car rental experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">1+ Year Experience</h3>
              <p className="text-gray-300">Trusted by thousands of customers in Dubai</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                <CheckCircle className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Well Maintained Fleet</h3>
              <p className="text-gray-300">All vehicles regularly serviced and inspected</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                <Star className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">5-Star Service</h3>
              <p className="text-gray-300">Exceptional customer service guaranteed</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Fully Insured</h3>
              <p className="text-gray-300">Complete insurance coverage for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 text-glow">About DriveFlow Dubai</h2>
              <p className="text-lg text-gray-300 mb-6">
                DriveFlow Dubai is a premier car rental service established in 2024, specializing in luxury 
                and premium vehicle rentals. We pride ourselves on providing exceptional service and maintaining 
                the highest standards of vehicle quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our mission is to make your journey in Dubai comfortable, safe, and memorable. Whether you're 
                here for business or leisure, we have the perfect vehicle to match your needs and budget.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Our Location</h4>
                  <p className="text-gray-300">Downtown Dubai, UAE</p>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-2">Operating Hours</h4>
                  <p className="text-gray-300">24/7 Service Available</p>
                </div>
              </div>
            </div>
            <div className="premium-gradient border border-cyan-500/30 rounded-2xl p-8 text-white cyber-glow">
              <h3 className="text-2xl font-bold mb-6 text-glow">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>+971 55 802 9149</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>driveflowdubai@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-cyan-400" />
                  <span>Downtown Dubai, UAE</span>
                </div>
              </div>
              <a href="tel:+971558029149" className="btn-secondary mt-6 inline-block">
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Dialog */}
      <EnquiryDialog
        isOpen={enquiryDialog.isOpen}
        onClose={closeEnquiryDialog}
        carName={enquiryDialog.carName}
      />

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/971558029149?text=Hello! I'm interested in renting a car from DriveFlow Dubai. Can you help me with more information?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
        }}
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat on WhatsApp
        </div>
      </a>
    </div>
  )
}

export default Home
