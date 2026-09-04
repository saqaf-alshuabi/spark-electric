import { defineLocalBusiness } from 'nuxt-schema-org/schema'
import { services } from './services'
import { contactPoint, formattedPhone, openingHours, sameAs, site } from './site'

function absolute(origin: string | undefined, path: string) {
  return origin ? new URL(path, origin).toString() : path
}

/**
 * Google wants the most specific LocalBusiness subtype.
 * https://nuxtseo.com/docs/schema-org/guides/setup-identity
 */
export function localBusinessIdentity(origin?: string) {
  return defineLocalBusiness({
    '@type': 'Electrician',
    'name': site.name,
    'description': site.description,
    'logo': site.logo,
    'image': [site.logo, ...services.map(service => service.image)],
    'telephone': formattedPhone,
    'contactPoint': contactPoint,
    'sameAs': sameAs,
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
          'url': absolute(origin, `/services/${service.slug}`),
        },
      })),
    },
  })
}
