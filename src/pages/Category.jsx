import React, { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Car, ArrowLeft } from 'lucide-react'
import { cars, categories } from '../data/cars'
import { openWhatsApp } from '../utils'
import LazyImage from '../components/ui/LazyImage'

const Category = () => {
  const { slug } = useParams()

  const category = categories.find(c => c.slug === slug)
  const items = useMemo(() => cars.filter(c => c.category === slug), [slug])

  const handleWhatsApp = (carName) => {
    openWhatsApp(carName)
  }

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-2">Category not found</h1>
        <p className="text-gray-300">Please choose a valid category from the home page.</p>
      </div>
    )
  }

  return (
    <div className="py-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <h1 className="text-3xl font-bold text-white">{category.name} Cars</h1>
          <div />
        </div>

        {items.length === 0 ? (
          <div className="text-center py-24">
            <Car className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No cars available yet</h3>
            <p className="text-gray-400">We're updating our {category.name} collection. Please check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((car, i) => (
              <div key={i} className="card hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                <div className="h-48 rounded-lg mb-4 overflow-hidden">
                  <LazyImage
                    carName={car.name}
                    alt={car.name}
                    className="w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-center text-white">{car.name}</h3>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleWhatsApp(car.name)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-400 hover:to-green-500 transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/25"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Category
