'use client'

import { motion } from 'framer-motion'
import { Product } from '@/types'

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Serrure Connectée Pro',
    category: 'Serrures',
    description: 'Serrure intelligente avec contrôle à distance et historique d\'accès',
    image: '/products/serrure-connectee.jpg',
    price: 299.99
  },
  {
    id: '2',
    name: 'Kit Quincaillerie Premium',
    category: 'Quincaillerie',
    description: 'Ensemble complet de quincaillerie haut de gamme pour portes',
    image: '/products/quincaillerie-premium.jpg',
    price: 149.99
  },
  {
    id: '3',
    name: 'Télécommande Store Universel',
    category: 'Télécommandes',
    description: 'Télécommande compatible avec la majorité des stores électriques',
    image: '/products/telecommande-store.jpg',
    price: 49.99
  }
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                {product.price.toFixed(2)} €
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                En savoir plus
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 