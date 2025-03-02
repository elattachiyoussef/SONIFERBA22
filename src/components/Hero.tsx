import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sécurisez votre quotidien avec Soniferba
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Expert en serrures, quincaillerie et solutions de sécurité
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Découvrir nos produits
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 