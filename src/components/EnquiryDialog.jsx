import React, { useState } from 'react'
import { X, Phone, Mail } from 'lucide-react'

const EnquiryDialog = ({ isOpen, onClose, carName }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupDate: '',
    returnDate: '',
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
        carName,
        ...formData
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
        alert('Thank you for your enquiry! We will contact you soon.')
        onClose()
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          pickupDate: '',
          returnDate: '',
          message: ''
        })
      } else {
        alert('Failed to submit enquiry. Please try calling us directly.')
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error)
      alert('Failed to submit enquiry. Please try calling us directly at +971 55 802 9149')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/20">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white text-glow">Car Rental Enquiry</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {carName && (
            <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <h4 className="font-semibold text-cyan-400 mb-2">Selected Vehicle</h4>
              <p className="text-gray-300">{carName}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="+971 55 802 9149"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-300 mb-1">
                  Pickup Date *
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="returnDate" className="block text-sm font-medium text-gray-300 mb-1">
                  Return Date *
                </label>
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Additional Requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="input-field"
                placeholder="Any special requirements or questions..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Submit Enquiry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-700 text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+971 55 802 9149</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>driveflowdubai@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnquiryDialog
