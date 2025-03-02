import React from 'react'
import { motion } from 'framer-motion'
import { Product } from '@/types'

const products: Product[] = [
  // ... ajoutez plus de produits ici
]

export default function Produits() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8">Nos Produits</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ajoutez le contenu des produits ici */}
        </div>
      </motion.div>
    </div>
  )
} 