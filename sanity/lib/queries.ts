import { groq } from 'next-sanity';

// Retreats
export const retreatsQuery = groq`
  *[_type == "retreat" && isActive == true] | order(startDate asc) {
    _id,
    title,
    slug,
    startDate,
    endDate,
    totalSpots,
    spotsRemaining,
    basePrice,
    earlyBirdPrice,
    earlyBirdDeadline,
    depositAmount,
    isFeatured,
    description,
    "image": image.asset->url
  }
`;

export const featuredRetreatQuery = groq`
  *[_type == "retreat" && isActive == true && isFeatured == true][0] {
    _id,
    title,
    slug,
    startDate,
    endDate,
    spotsRemaining,
    basePrice,
    earlyBirdPrice,
    earlyBirdDeadline
  }
`;

export const nextRetreatQuery = groq`
  *[_type == "retreat" && isActive == true && startDate > now()] | order(startDate asc)[0] {
    _id,
    title,
    startDate,
    endDate,
    spotsRemaining,
    totalSpots,
    basePrice
  }
`;

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    "photo": photo.asset->url,
    quote,
    service,
    videoUrl,
    featured
  }
`;

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    name,
    "photo": photo.asset->url,
    quote,
    service,
    videoUrl
  }
`;

export const testimonialsByServiceQuery = groq`
  *[_type == "testimonial" && service == $service] | order(order asc) {
    _id,
    name,
    "photo": photo.asset->url,
    quote,
    videoUrl
  }
`;

// FAQs
export const faqsQuery = groq`
  *[_type == "faq"] | order(category asc, order asc) {
    _id,
    question,
    answer,
    category
  }
`;

export const faqsByCategoryQuery = groq`
  *[_type == "faq" && category == $category] | order(order asc) {
    _id,
    question,
    answer
  }
`;

// Team
export const teamQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    slug,
    role,
    credentials,
    "photo": photo.asset->url,
    shortBio,
    fullBio,
    education,
    certifications,
    experience,
    videoIntroUrl
  }
`;

// Blog
export const blogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    "author": author->{name, "photo": photo.asset->url},
    categories,
    publishedAt,
    featured
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    body,
    "author": author->{name, "photo": photo.asset->url, role},
    categories,
    publishedAt,
    seoTitle,
    seoDescription
  }
`;

export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    publishedAt
  }
`;

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && $category in categories] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    publishedAt
  }
`;

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    description,
    email,
    phone,
    whatsapp,
    instagram,
    calendlyUrl,
    location,
    urgencyBar,
    "ogImage": ogImage.asset->url
  }
`;
