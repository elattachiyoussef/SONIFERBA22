import { CompanyInfo } from '@/types/company'

export const companyInfo: CompanyInfo = {
  name: 'Soniferba',
  legalName: 'Soniferba SARL',
  description: 'Expert en serrures, quincaillerie et solutions de sécurité depuis plus de 30 ans',
  contact: {
    address: {
      street: '123 Rue de la Sécurité',
      city: 'Paris',
      postalCode: '75000',
      country: 'France'
    },
    phone: '01 23 45 67 89',
    email: 'contact@soniferba.fr',
    socialMedia: {
      facebook: 'https://facebook.com/soniferba',
      linkedin: 'https://linkedin.com/company/soniferba',
    }
  },
  history: {
    founded: 1990,
    milestones: [
      {
        year: 1990,
        event: 'Création de Soniferba, spécialiste de la quincaillerie'
      },
      {
        year: 2005,
        event: 'Expansion vers les solutions de sécurité électronique'
      },
      {
        year: 2020,
        event: 'Rachat par le groupe EXO 7 Sécurité'
      }
    ]
  },
  specialties: [
    {
      name: 'Serrures',
      description: 'Serrures mécaniques et électroniques de haute sécurité'
    },
    {
      name: 'Quincaillerie',
      description: 'Large gamme de quincaillerie pour portes et fenêtres'
    },
    {
      name: 'Visserie',
      description: 'Solutions complètes de visserie pour tous types de projets'
    },
    {
      name: 'Télécommandes',
      description: 'Télécommandes pour stores et systèmes d\'ouverture'
    }
  ],
  partners: [
    {
      name: 'ABUS',
      logo: '/brands/abus.png',
      description: 'Leader mondial de la sécurité'
    },
    {
      name: 'VACHETTE',
      logo: '/brands/vachette.png',
      description: 'Spécialiste français des serrures'
    },
    {
      name: 'SOMFY',
      logo: '/brands/somfy.png',
      description: 'Expert en automatismes et télécommandes'
    },
    {
      name: 'BRICARD',
      logo: '/brands/bricard.png',
      description: 'Référence en serrurerie haute sécurité'
    },
    {
      name: 'THIRARD',
      logo: '/brands/thirard.png',
      description: 'Fabricant français de serrures et quincaillerie'
    }
  ],
  services: [
    {
      title: 'Conseil Technique',
      description: 'Expertise et accompagnement dans le choix des solutions',
      icon: 'LightBulbIcon'
    },
    {
      title: 'Installation',
      description: 'Service d\'installation professionnel pour tous nos produits',
      icon: 'WrenchIcon'
    },
    {
      title: 'Maintenance',
      description: 'Entretien et réparation de vos installations',
      icon: 'WrenchScrewdriverIcon'
    },
    {
      title: 'Formation',
      description: 'Sessions de formation pour les professionnels',
      icon: 'AcademicCapIcon'
    }
  ]
} 