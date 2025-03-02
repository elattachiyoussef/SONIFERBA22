import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrandSlider from '@/components/BrandSlider'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Soniferba</h1>
        <p className="text-xl">Expert en serrures et quincaillerie</p>
      </div>
    </main>
  )
} 