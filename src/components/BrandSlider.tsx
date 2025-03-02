'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Brand } from '@/types'

const brands: Brand[] = [
  { id: '1', name: 'Marque 1', logo: '/brands/brand1.png' },
  { id: '2', name: 'Marque 2', logo: '/brands/brand2.png' },
  { id: '3', name: 'Marque 3', logo: '/brands/brand3.png' },
  { id: '4', name: 'Marque 4', logo: '/brands/brand4.png' },
  { id: '5', name: 'Marque 5', logo: '/brands/brand5.png' }
]

export default function BrandSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === brands.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center items-center space-x-12">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="w-32 h-32 flex items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 