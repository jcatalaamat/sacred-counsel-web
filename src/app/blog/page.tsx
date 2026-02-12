import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/sections/Hero';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on psychedelic integration, plant medicine preparation, wellness practices, and transformative healing from Sacred Counsel.',
  openGraph: {
    title: 'Blog | Sacred Counsel',
    description:
      'Articles on psychedelic integration, plant medicine preparation, and holistic wellness.',
  },
};

// Placeholder blog posts until Sanity is connected
const placeholderPosts = [
  {
    _id: '1',
    title: 'Preparing for Your First Ayahuasca Ceremony',
    slug: { current: 'preparing-for-ayahuasca' },
    excerpt:
      'A comprehensive guide to physical, mental, and spiritual preparation for your first plant medicine journey.',
    featuredImage: '/images/home/home-offerings-retreat.png',
    publishedAt: '2024-12-15',
    categories: ['preparation', 'plant-medicine'],
    author: { name: 'Alexa Iya Soro' },
  },
  {
    _id: '2',
    title: 'The Importance of Integration After Ceremony',
    slug: { current: 'importance-of-integration' },
    excerpt:
      'Why the work after your psychedelic experience is just as important as the ceremony itself.',
    featuredImage: '/images/home/home-offerings-therapy.png',
    publishedAt: '2024-11-28',
    categories: ['integration', 'mental-health'],
    author: { name: 'Alexa Iya Soro' },
  },
  {
    _id: '3',
    title: 'Understanding the Dieta: Traditional Plant Medicine Practices',
    slug: { current: 'understanding-the-dieta' },
    excerpt:
      'Learn about the traditional dietary and lifestyle practices that support deep plant medicine work.',
    featuredImage: '/images/detox/detox-hero.jpg',
    publishedAt: '2024-11-10',
    categories: ['preparation', 'wellness'],
    author: { name: 'Luke DeStefano' },
  },
  {
    _id: '4',
    title: 'Nervous System Regulation for Psychedelic Journeys',
    slug: { current: 'nervous-system-regulation' },
    excerpt:
      'Practical techniques for regulating your nervous system before, during, and after ceremony.',
    featuredImage: '/images/integration/integration-hero.jpg',
    publishedAt: '2024-10-25',
    categories: ['wellness', 'mental-health'],
    author: { name: 'Alexa Iya Soro' },
  },
];

const categoryLabels: Record<string, string> = {
  preparation: 'Preparation',
  integration: 'Integration',
  wellness: 'Wellness',
  'plant-medicine': 'Plant Medicine',
  'mental-health': 'Mental Health',
  'retreat-life': 'Retreat Life',
  news: 'News',
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const posts = placeholderPosts;

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights & Guidance"
        description="Articles on preparation, integration, and the transformative journey of plant medicine work."
        backgroundImage="/images/venue/meditation.jpg"
      />

      <section className="section bg-white">
        <div className="container">
          {/* Featured Post */}
          {posts[0] && (
            <div className="mb-16">
              <Link
                href={`/blog/${posts[0].slug.current}`}
                className="group block"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                    <Image
                      src={posts[0].featuredImage}
                      alt={posts[0].title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {posts[0].categories?.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 bg-[var(--color-sage-light)] text-[var(--color-forest)] text-sm rounded-full"
                        >
                          {categoryLabels[cat] || cat}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-[var(--color-charcoal)] mb-4 group-hover:text-[var(--color-forest)] transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-[var(--color-charcoal-light)] text-lg mb-4">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[var(--color-charcoal-light)]">
                      <span>{posts[0].author?.name}</span>
                      <span>•</span>
                      <span>{formatDate(posts[0].publishedAt)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Post Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group"
              >
                <article className="h-full">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories?.slice(0, 2).map((cat) => (
                      <span
                        key={cat}
                        className="px-2 py-0.5 bg-[var(--color-sand)] text-[var(--color-charcoal-light)] text-xs rounded-full"
                      >
                        {categoryLabels[cat] || cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-forest)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--color-charcoal-light)] text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-[var(--color-charcoal-light)]">
                    {formatDate(post.publishedAt)}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="mt-16 text-center">
            <p className="text-[var(--color-charcoal-light)]">
              More articles coming soon. Sign up for our newsletter to be
              notified of new posts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
