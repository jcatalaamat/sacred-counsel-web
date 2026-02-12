// FAQ Data - separated for use in both client and server components

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const AYAHUASCA_FAQS: FAQ[] = [
  {
    question: 'Is ayahuasca legal in Mexico?',
    answer: 'Yes, ayahuasca is legal in Mexico for spiritual and ceremonial use. Our ceremonies are conducted in full compliance with Mexican law, in a safe and sacred container facilitated by experienced practitioners.',
  },
  {
    question: 'What is included in the retreat price?',
    answer: 'The retreat includes airport transfers, 5 days/4 nights accommodation, all organic plant-based meals, 2 ayahuasca ceremonies, breathwork and meditation sessions, integration circles, pre-retreat preparation calls, and post-retreat integration support.',
  },
  {
    question: 'Who should NOT participate?',
    answer: 'Ayahuasca is contraindicated for those with certain heart conditions, schizophrenia, bipolar disorder, or those taking SSRIs, MAOIs, or certain other medications. A thorough medical screening is part of our application process to ensure your safety.',
  },
  {
    question: 'What is the dieta?',
    answer: 'The dieta is a preparation protocol that includes dietary restrictions (no pork, alcohol, fermented foods, aged cheeses, etc.) and behavioral guidelines to prepare your body and mind for ceremony. We provide detailed guidance 2-3 weeks before the retreat.',
  },
  {
    question: 'How many people attend each retreat?',
    answer: 'Our retreats are intentionally small, with 8-12 participants maximum. This ensures personalized attention and a deep, intimate container for the work.',
  },
  {
    question: 'What happens during a ceremony?',
    answer: "Ceremonies begin at sunset and continue through the night. You'll drink the medicine in a sacred space, accompanied by live music (icaros), and supported by our facilitators throughout your journey. Each person's experience is unique.",
  },
  {
    question: 'What kind of support is available after the retreat?',
    answer: 'Integration is essential. All participants receive access to our online integration resources and a post-retreat group call. We also offer ongoing 1:1 integration therapy sessions with Alexa for those who want deeper support.',
  },
  {
    question: 'How do I get to Valle de Bravo?',
    answer: "Most guests fly into Mexico City (MEX). Valle de Bravo is approximately 2.5 hours from the airport. We arrange all transportation—you'll be picked up at the airport and brought directly to the venue.",
  },
];

export const INTEGRATION_FAQS: FAQ[] = [
  {
    question: 'What is psychedelic integration therapy?',
    answer: 'Psychedelic integration is the process of making sense of, embodying, and applying the insights from psychedelic experiences to your daily life. It helps you translate profound experiences into lasting transformation.',
  },
  {
    question: 'Do I need to have done psychedelics to work with you?',
    answer: 'No. While I specialize in psychedelic integration, I also work with clients on general mental health, grief, trauma, relationship issues, and spiritual development without any psychedelic component.',
  },
  {
    question: 'What modalities do you use?',
    answer: 'I draw from depth psychology, Internal Family Systems (IFS), relational/cultural therapy, yin yoga therapy, nervous system entrainment, neuroscience psycho-education, and mythology/ancestral work.',
  },
  {
    question: 'How are sessions conducted?',
    answer: 'Sessions are conducted via secure video call, typically 50-60 minutes. I work with clients globally and accommodate various time zones.',
  },
  {
    question: 'How many sessions do I need?',
    answer: "This varies greatly by individual. Some clients benefit from a few focused sessions around a specific experience, while others engage in longer-term therapeutic work. We'll discuss what makes sense for your situation.",
  },
];

export const DETOX_FAQS: FAQ[] = [
  {
    question: 'What is the 21-Day Metabolic Detox?',
    answer: "It's a comprehensive program combining functional medicine principles, Ayurvedic wisdom, and practical lifestyle changes to reset your metabolism, clear toxins, and establish sustainable healthy habits.",
  },
  {
    question: 'Is this a good preparation for ayahuasca?',
    answer: 'Absolutely. Many clients use this program to prepare their body and mind for plant medicine ceremony. It aligns well with traditional dieta principles while providing modern nutritional support.',
  },
  {
    question: "What's included in the $920 price?",
    answer: 'You receive a personalized wellness plan, bio-individualized diet plan, complete functional medicine & Ayurvedic supplements, a detox cookbook, 4 private video calls with Luke, and ongoing text/email support throughout the program.',
  },
  {
    question: 'Is this appropriate for vegetarians/vegans?',
    answer: 'Yes, the program is fully customizable to your dietary preferences and restrictions. We create a bio-individualized plan that works for your lifestyle.',
  },
  {
    question: 'What results can I expect?',
    answer: "Common results include increased energy, mental clarity, better sleep, reduced inflammation, weight normalization, improved digestion, and a clearer understanding of which foods work best for your body.",
  },
];

export const HOMESTAY_FAQS: FAQ[] = [
  {
    question: 'What makes the homestay different from the group retreat?',
    answer: 'The homestay is a fully personalized experience for 1-2 people at our private home, La Fuente. You receive one-on-one attention, customized programming, and can choose from a wide range of modalities including various plant medicines, therapy, detox, or simply rest and rejuvenation.',
  },
  {
    question: 'What plant medicines are available?',
    answer: "At La Fuente, we can facilitate experiences with ayahuasca, 5-MeO-DMT (Bufo), psilocybin, and Kambo. We'll discuss which medicine(s) align with your intentions during the consultation process.",
  },
  {
    question: 'How long are homestay retreats?',
    answer: "Stays are fully customizable, typically ranging from 3-14 days depending on your goals. We'll design the ideal duration together based on what you want to accomplish.",
  },
  {
    question: 'What amenities are available?',
    answer: 'La Fuente features a spring-fed jacuzzi, Turkish sauna, ice baths, hyperbaric oxygen chamber, infrared therapy, massage and acupuncture services, a recording studio, and an expressive arts workshop space.',
  },
  {
    question: 'Is this suitable for couples?',
    answer: 'Yes, we regularly host couples for relationship deepening work, shared ceremonies, and individual sessions. Many couples find this to be a transformative experience for their partnership.',
  },
];
