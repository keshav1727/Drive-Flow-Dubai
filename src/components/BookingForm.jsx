import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, User, Phone, Mail, Car } from 'lucide-react'

const BookingForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    returnTime: '',
    vehicleType: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const enquiryData = {
        name: formData.name,
        phone: formData.contact,
        email: formData.email,
        pickupDate: formData.pickupDate,
        returnDate: formData.returnDate,
        pickupTime: formData.pickupTime,
        returnTime: formData.returnTime,
        vehicleType: formData.vehicleType,
        message: formData.message,
        type: 'booking'
      }

      // Send to backend API
      const response = await fetch('http://localhost:3001/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryData)
      })

      const result = await response.json()

      if (result.success) {
        alert('Thank you for your query! We will contact you soon.')
        // Reset form
        setFormData({
          name: '',
          contact: '',
          email: '',
          pickupDate: '',
          returnDate: '',
          pickupTime: '',
          returnTime: '',
          vehicleType: '',
          message: ''
        })
      } else {
        alert('Failed to submit query. Please try calling us directly.')
      }
    } catch (error) {
      console.error('Error submitting query:', error)
      alert('Failed to submit query. Please try calling us directly at +971558029149')
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Booking</h3>
        <p className="text-gray-600">Get your ride in just a few clicks</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline h-4 w-4 mr-1" />
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline h-4 w-4 mr-1" />
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input-field"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Pickup Date
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              className="input-field"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Return Date
            </label>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              className="input-field"
              min={formData.pickupDate || new Date().toISOString().split('T')[0]}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Time
            </label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Return Time
            </label>
            <input
              type="time"
              name="returnTime"
              value={formData.returnTime}
              onChange={handleInputChange}
              className="input-field"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Car className="inline h-4 w-4 mr-1" />
            Vehicle Type
          </label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleInputChange}
            className="input-field"
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="luxury">Luxury Sedan (BMW 7 Series, Mercedes S-Class)</option>
            <option value="suv">Premium SUV (Range Rover, BMW X5)</option>
            <option value="economy">Economy (Toyota Camry, Nissan Altima)</option>
            <option value="sports">Sports Car (Porsche, Ferrari)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="input-field"
            rows="3"
            placeholder="Any specific requirements or questions..."
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary mt-6"
        >
          Submit Query
        </button>
      </form>
    </div>
  )
}

export default BookingForm
