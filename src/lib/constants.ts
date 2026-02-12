import type { Testimonial } from '@/types';

export const SITE_CONFIG = {
  name: 'Sacred Counsel',
  tagline: 'Integrative Psychedelic Support',
  description: 'Sacred Counsel offers transformative ayahuasca retreats, private homestays, psychedelic integration therapy, and holistic wellness programs in Valle de Bravo, Mexico.',
  url: 'https://sacred-counsel.com',
  email: 'hello@sacred-counsel.com',
  phone: '+52 1 XXX XXX XXXX',
  whatsapp: '+521XXXXXXXXXX',
  instagram: '@sacred.counsel',
  calendlyUrl: 'https://calendly.com/sacred-counsel',
  location: {
    city: 'Valle de Bravo',
    state: 'Estado de México',
    country: 'Mexico',
    distanceFromMexicoCity: '2 hours from Mexico City',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Offerings',
    href: '#',
    children: [
      { label: 'Ayahuasca Retreats', href: '/ayahuasca', description: 'Group ceremonies in Mexico\'s Central Highlands' },
      { label: 'Private Homestays', href: '/homestay', description: 'Personalized retreats at La Fuente' },
      { label: 'Integration Therapy', href: '/integration', description: 'Ongoing support with Alexa' },
      { label: '21-Day Detox', href: '/detox', description: 'Metabolic reset & plant medicine dieta' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
];

export const SERVICES = {
  ayahuasca: {
    name: 'Ayahuasca Retreat',
    shortName: 'Retreat',
    description: 'A 5-day, 2-ceremony experience with world-class facilitation at an exquisite venue in Mexico\'s Central Highlands.',
    startingPrice: 3300,
    duration: '5 days',
    ceremonies: 2,
    groupSize: '8-12 guests',
    href: '/ayahuasca',
  },
  homestay: {
    name: 'Private Homestay',
    shortName: 'Homestay',
    description: 'Highly personalized retreats for 1-2 people at our homestead in Valle de Bravo, featuring private ceremonies and tailored wellness programs.',
    startingPrice: null, // Custom pricing
    duration: 'Custom',
    href: '/homestay',
  },
  integration: {
    name: 'Integration Therapy',
    shortName: 'Integration',
    description: 'Ongoing support to embrace all that you are, all that you can become, and learn to live your most purposeful life.',
    pricing: {
      single: 170,
      three: 575,
      seven: 1155,
    },
    href: '/integration',
  },
  detox: {
    name: '21-Day Metabolic Detox',
    shortName: 'Detox',
    description: 'A comprehensive detox program combining functional medicine, Ayurvedic principles, and plant medicine preparation.',
    price: 920,
    duration: '21 days',
    href: '/detox',
  },
};

export const TEAM = {
  alexa: {
    name: 'Alexa Iya Soro',
    credentials: 'MA, LMHC',
    role: 'Co-founder, Psychotherapist, Psychedelic Integration Guide',
    education: [
      'Brown University, BA Psychology',
      'Salve Regina University, MA Holistic Counseling',
      'Naropa University, Buddhist Applications of Therapy',
    ],
    certifications: [
      'IFS Certified',
      'Ancestral Healing Facilitator (Daniel Foor)',
      '200 Hour Yoga Teacher Training',
    ],
    experience: '10+ years in ritual healing, grief processing, and plant medicine integration',
  },
  luke: {
    name: 'Luke DeStefano',
    credentials: 'IHP2',
    role: 'Co-founder, Integrative Health Practitioner, Retreat Facilitator',
    experience: '20+ years of ceremony facilitation and musicianship',
    training: [
      'Studies in Thailand, Vietnam, China, Laos, Nepal, Costa Rica, Mexico',
      'Dharma Mountain lineage of Mahayana Buddhism',
      'Kambo facilitator, massage therapist, breathwork guide',
    ],
  },
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'angie',
    name: 'Angie',
    quote: "I can't say enough good things about both Luke and Alexa. They did an such amazing job to create a beautiful and safe space for our journey. Their attention to detail is phenomenal!",
    service: 'ayahuasca',
    image: '/images/testimonials/testimonial-angie.png',
  },
  {
    id: 'moses',
    name: 'Moses',
    quote: 'Beautiful souls offering deep wisdom, guidance and presence! Definitely recommend working with them for a retreat, 1:1 support or any other way you can!',
    service: 'ayahuasca',
    image: '/images/testimonials/testimonial-moses.jpg',
  },
  {
    id: 'yair',
    name: 'Yair',
    quote: "Luke and Alexa are some of the most loving and beautiful humans I've ever met. Their level of care and authenticity is truly unique, as well as their knowledge and experience.",
    service: 'ayahuasca',
    image: '/images/testimonials/testimonial-yair.png',
  },
  {
    id: 'katy',
    name: 'Katy',
    quote: 'Luke and Alexa are amazing people and made everything about this experience incredible. They created a supportive and family like environment, where I felt taken care of.',
    service: 'ayahuasca',
    image: '/images/testimonials/testimonial-katy.png',
  },
  {
    id: 'patrick',
    name: 'Patrick',
    quote: 'Luke is a wellspring of wisdom — a beacon of positive energy, radiant light, and healing vibrations. His presence is deeply calming.',
    service: 'ayahuasca',
    image: '/images/testimonials/testimonial-patrick.jpg',
  },
  {
    id: 'rae',
    name: 'Rae',
    quote: "With every conversation I have with Alexa, I walk away with a deeper understanding of myself. She has helped me process, heal, and grow in ways I didn't even realize I needed.",
    service: 'integration',
    image: '/images/testimonials/testimonial-rae.jpg',
  },
  {
    id: 'nancy-richard',
    name: 'Nancy & Richard',
    quote: 'Sacred Counsel facilitated a private psilocybin experience for the two of us, which unexpectedly took us deep into our relationship.',
    service: 'homestay',
    image: '/images/testimonials/testimonial-nancy-richard.png',
  },
  {
    id: 'ron',
    name: 'Ron',
    quote: 'Amazing & Authentic. The most caring group leaders I\'ve come across that put a tremendous effort into everyone\'s participation.',
    service: 'ayahuasca',
    image: '/images/testimonials/testimonial-ron.png',
  },
];

export const RETREAT_AMENITIES = [
  'Comfortable eco-friendly accommodations',
  'All organic, plant-based meals',
  '2 ayahuasca ceremonies',
  'Breathwork & meditation sessions',
  'Integration circles',
  'Nature walks & excursions',
  'Preparation & integration calls',
  'Medical screening & support',
];

export const HOMESTAY_AMENITIES = [
  { name: 'Spring Water Jacuzzi', icon: 'droplets' },
  { name: 'Turkish Sauna', icon: 'thermometer' },
  { name: 'Clay Masks & Salt Scrubs', icon: 'sparkles' },
  { name: 'Massage & Acupuncture', icon: 'hand' },
  { name: 'Ice Baths', icon: 'snowflake' },
  { name: 'Ceremony Room', icon: 'moon' },
  { name: 'Hyperbaric Oxygen Chamber', icon: 'wind' },
  { name: 'Infrared Therapy', icon: 'sun' },
  { name: 'Recording Studio', icon: 'music' },
  { name: 'Expressive Arts Workshop', icon: 'palette' },
];

export const HOMESTAY_OFFERINGS = [
  'Plant Medicine Ceremony (Ayahuasca, 5-MeO-DMT, Psilocybin, Kambo)',
  'Psychotherapy & Psychedelic Integration',
  'Ketamine Therapy',
  'Yoga, Meditation & Breathwork',
  'Detox & Sobriety Programs',
  'Health Coaching',
  'Silence & Digital Detox',
  'Artist & Musician Residencies',
  'Gardening & Nature Immersion',
];

export const INTEGRATION_MODALITIES = [
  'Depth Psychology',
  'Internal Family Systems (IFS)',
  'Relational/Cultural Therapy',
  'Yin Yoga Therapy',
];

export const INTEGRATION_TECHNIQUES = [
  'Nervous system entrainment',
  'Neuroscience-psycho-education',
  'Mythology, ritual & ancestral connection',
];

export const INTEGRATION_FOCUS_AREAS = [
  'Emotional Processing',
  'Neuroplasticity Education',
  'Mindset & Intention Setting',
  'Safe Integration Practices',
  'Nervous System Regulation',
  'Trauma Healing',
  'Relationship Healing & Couples Counseling',
  'Exploring Animistic Modalities',
];

export const DETOX_PILLARS = [
  'Diet',
  'Exercise',
  'Supplementation',
  'Toxin Removal',
  'Stress Management',
  'Positive Mindset',
  'Sleep',
  'Spiritual Connection',
];

export const DETOX_INCLUSIONS = [
  'Personalized wellness plan',
  'Bio-individualized diet plan',
  'Complete functional medicine & Ayurvedic supplements',
  'Detox cookbook',
  '4 private video calls',
  'Ongoing text/email support',
  'Educational resources',
];
