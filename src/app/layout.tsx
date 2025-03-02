import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soniferba - Serrures & Quincaillerie',
  description: 'Expert en serrures et quincaillerie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
} 