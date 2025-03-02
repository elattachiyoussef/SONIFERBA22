export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Votre ID Google Analytics

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
} 