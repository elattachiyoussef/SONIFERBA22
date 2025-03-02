import { Metadata } from 'next'
import { companyInfo } from '@/config/company'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.soniferba.fr'

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${companyInfo.name} - Serrures & Quincaillerie`,
    template: `%s | ${companyInfo.name}`
  },
  description: companyInfo.description,
  keywords: [
    'serrures',
    'quincaillerie',
    'sécurité',
    'télécommandes',
    'stores',
    'vis',
    'Paris',
    'France'
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    siteName: companyInfo.name,
    title: `${companyInfo.name} - Serrures & Quincaillerie`,
    description: companyInfo.description,
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: companyInfo.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} - Serrures & Quincaillerie`,
    description: companyInfo.description,
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-de-verification-google',
  },
} 