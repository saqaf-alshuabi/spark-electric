import { defineLocalBusiness } from 'nuxt-schema-org/schema'
import { services } from './services'
import { formattedPhone, site, whatsappUrl } from './site'

const ALL_DAYS = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
] as const

const openingHours = {
  dayOfWeek: [...ALL_DAYS],
  opens: '00:00:00' as const,
  closes: '23:59:00' as const,
}

const contactPoint = {
  '@type': 'ContactPoint' as const,
  'telephone': formattedPhone,
  'contactType': 'customer service',
  'availableLanguage': ['ar'],
  'url': whatsappUrl,
}

/**
 * Google wants the most specific LocalBusiness subtype.
 * https://nuxtseo.com/docs/schema-org/guides/setup-identity
 *
 * Relative URLs are resolved against site.url by Nuxt Schema.org.
 */
export function localBusinessIdentity() {
  return defineLocalBusiness({
    // Electrician is the specific Schema.org type. Module types stop at HomeAndConstructionBusiness.
    '@type': 'Electrician' as 'HomeAndConstructionBusiness',
    'name': site.name,
    'description': site.description,
    'logo': site.logo,
    'image': [site.logo, ...services.map(service => service.image)],
    'telephone': formattedPhone,
    'contactPoint': contactPoint,
    'sameAs': [
      whatsappUrl,
      ...(site.googleBusinessUrl ? [site.googleBusinessUrl] : []),
    ],
    'currenciesAccepted': 'SAR',
    'availableLanguage': ['ar'],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': site.address.locality,
      'addressRegion': site.address.region,
      'addressCountry': site.address.country,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': site.geo.latitude,
      'longitude': site.geo.longitude,
    },
    'areaServed': site.areasServed.map(name => ({
      '@type': 'Place',
      'name': name,
    })),
    'serviceArea': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': site.geo.latitude,
        'longitude': site.geo.longitude,
      },
      'geoRadius': site.serviceRadiusKm * 1000,
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        ...openingHours,
      },
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `خدمات الكهرباء في ${site.city}`,
      'itemListElement': services.map(service => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': `${service.serviceType} في ${site.city}`,
          'description': service.seoDescription,
          'serviceType': service.serviceType,
          'url': `/services/${service.slug}`,
        },
      })),
    },
  })
}
