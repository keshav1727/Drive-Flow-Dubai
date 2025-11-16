import React, { useState, useRef, useEffect } from 'react'
import { Car } from 'lucide-react'
import { getOptimizedImageUrl, getImageFallback } from '../../utils/imageUtils'

const LazyImage = ({ 
  carName, 
  alt, 
  className = '', 
  showFallback = true 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  const imageUrl = hasError ? getImageFallback() : getOptimizedImageUrl(carName)

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isInView ? (
        // Placeholder while not in view
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <Car className="h-8 w-8 text-gray-600 animate-pulse" />
        </div>
      ) : (
        <>
          {/* Loading skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <Car className="h-8 w-8 text-gray-600 animate-pulse" />
            </div>
          )}
          
          {/* Actual image */}
          <img
            src={imageUrl}
            alt={alt || carName}
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        </>
      )}
    </div>
  )
}

export default LazyImage
