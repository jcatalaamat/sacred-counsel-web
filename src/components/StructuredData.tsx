export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sacred Counsel',
    description:
      'Transformative ayahuasca retreats, private homestays, psychedelic integration therapy, and holistic wellness programs in Valle de Bravo, Mexico.',
    url: 'https://sacred-counsel.com',
    logo: 'https://sacred-counsel.com/images/logos/logo-detailed.png',
    email: 'hello@sacred-counsel.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valle de Bravo',
      addressRegion: 'Estado de Mexico',
      addressCountry: 'MX',
    },
    sameAs: ['https://instagram.com/sacred.counsel'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Sacred Counsel',
    description:
      'Psychedelic retreats, integration therapy, and holistic wellness programs.',
    url: 'https://sacred-counsel.com',
    image: 'https://sacred-counsel.com/images/venue/aya-hero.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valle de Bravo',
      addressRegion: 'Estado de Mexico',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.1936,
      longitude: -100.1319,
    },
    priceRange: '$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  price: number;
  currency?: string;
  image?: string;
  url?: string;
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location = 'Valle de Bravo, Mexico',
  price,
  currency = 'USD',
  image,
  url,
}: EventSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Sacred Counsel Retreat Center',
      address: {
        '@type': 'PostalAddress',
        addressLocality: location,
        addressCountry: 'MX',
      },
    },
    image: image || 'https://sacred-counsel.com/images/venue/aya-hero.png',
    organizer: {
      '@type': 'Organization',
      name: 'Sacred Counsel',
      url: 'https://sacred-counsel.com',
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: url || 'https://sacred-counsel.com/apply',
      validFrom: new Date().toISOString(),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  sameAs?: string[];
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  sameAs,
}: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image,
    worksFor: {
      '@type': 'Organization',
      name: 'Sacred Counsel',
    },
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
