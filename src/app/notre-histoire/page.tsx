import React from 'react'
import { motion } from 'framer-motion'

export default function NoterHistoire() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-8">Notre Histoire</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Depuis plus de 30 ans, Soniferba s'est imposé comme un acteur majeur dans le domaine 
            de la quincaillerie et de la sécurité. Notre expertise et notre engagement envers 
            la qualité nous ont permis de devenir un partenaire de confiance pour nos clients.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Notre Evolution</h2>
          <p className="mb-6">
            En 2020, Soniferba a rejoint le groupe EXO 7 Sécurité, renforçant ainsi notre position 
            sur le marché et nous permettant d'offrir une gamme encore plus large de solutions 
            à nos clients.
          </p>
        </div>
      </motion.div>
    </div>
  )
} 