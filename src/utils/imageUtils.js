// Image optimization utilities
export const getOptimizedImageUrl = (carName) => {
  // Convert car name to URL-friendly format
  const slug = carName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
  
  // Return single image path
  return `/images/cars/${slug}.webp`
}

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

export const getImageFallback = () => {
  return '/images/placeholder-car.webp'
}
