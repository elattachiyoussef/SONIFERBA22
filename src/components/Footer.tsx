'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { companyInfo } from '@/config/company'

export default function Footer() {
  const { contact, name } = companyInfo

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <p className="text-sm">
              {companyInfo.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/notre-histoire" className="hover:text-blue-400 transition-colors">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="/produits" className="hover:text-blue-400 transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Nos Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>📍 {contact.address.street}</li>
              <li>📞 {contact.phone}</li>
              <li>✉️ {contact.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <motion.a
                href={contact.socialMedia.facebook}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-400 transition-colors"
              >
                Facebook
              </motion.a>
              <motion.a
                href={contact.socialMedia.linkedin}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} {name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 