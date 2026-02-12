import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Placeholder blog posts until Sanity is connected
const placeholderPosts: Record<string, {
  title: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string;
  categories: string[];
  author: { name: string; photo?: string; role?: string };
  body: string;
}> = {
  'preparing-for-ayahuasca': {
    title: 'Preparing for Your First Ayahuasca Ceremony',
    excerpt:
      'A comprehensive guide to physical, mental, and spiritual preparation for your first plant medicine journey.',
    featuredImage: '/images/home/home-offerings-retreat.png',
    publishedAt: '2024-12-15',
    categories: ['preparation', 'plant-medicine'],
    author: { name: 'Alexa Iya Soro', role: 'Psychotherapist & Integration Guide' },
    body: `
## Physical Preparation

The weeks leading up to your ceremony are a crucial time for preparing your body. We recommend following the traditional dieta, which involves avoiding certain foods and substances that can interfere with the medicine.

### Foods to Avoid

- Fermented foods (aged cheese, soy sauce, sauerkraut)
- Processed and fried foods
- Red meat and pork
- Alcohol and recreational drugs
- Caffeine (ideally reduce gradually)

### Foods to Embrace

- Fresh fruits and vegetables
- Light proteins like fish and chicken
- Whole grains
- Plenty of water

## Mental Preparation

Ayahuasca works on multiple levels—physical, emotional, and spiritual. Coming to ceremony with a clear intention helps focus the medicine's work.

### Setting Your Intention

Take time to reflect on what you're seeking from this experience. Common intentions include:
- Healing from past trauma
- Gaining clarity on life direction
- Releasing limiting patterns
- Deepening spiritual connection
- Processing grief or loss

Write your intention down and revisit it daily in the weeks before ceremony.

## Spiritual Preparation

Many participants find it helpful to establish or deepen a contemplative practice before ceremony. This might include:

- Daily meditation, even just 10-15 minutes
- Journaling about your hopes and fears
- Time in nature
- Reducing screen time and digital stimulation

## What to Bring

We'll provide a detailed packing list, but essentials include:
- Comfortable, loose clothing in natural fibers
- A journal and pen
- Any meaningful objects for the altar
- An open heart and curious mind
    `,
  },
  'importance-of-integration': {
    title: 'The Importance of Integration After Ceremony',
    excerpt:
      'Why the work after your psychedelic experience is just as important as the ceremony itself.',
    featuredImage: '/images/home/home-offerings-therapy.png',
    publishedAt: '2024-11-28',
    categories: ['integration', 'mental-health'],
    author: { name: 'Alexa Iya Soro', role: 'Psychotherapist & Integration Guide' },
    body: `
## What Is Integration?

Integration is the ongoing process of making sense of and incorporating insights from your psychedelic experience into your daily life. The ceremony may last one night, but the integration process can unfold over weeks, months, or even years.

## Why Integration Matters

Many people have profound experiences during ceremony but struggle to translate those insights into lasting change. Without proper integration:

- Insights can fade or feel disconnected from daily life
- Old patterns can quickly reassert themselves
- The depth of the experience may not translate into meaningful growth

## Key Integration Practices

### Journaling

Within the first few days after ceremony, while memories are fresh, write down:
- Key visions or experiences
- Messages or insights received
- Emotions that arose
- Questions that emerged

### Therapeutic Support

Working with a trained integration therapist can help you:
- Process difficult or confusing experiences
- Identify action steps from your insights
- Navigate relationship or life changes
- Address any challenging material that arose

### Embodiment Practices

The body holds wisdom from the experience. Gentle practices like:
- Yoga
- Walking in nature
- Breathwork
- Dance or movement

...help integrate on a somatic level.

## Our Integration Support

At Sacred Counsel, we offer:
- Post-retreat integration calls included with your retreat
- Ongoing integration therapy with Alexa
- Integration circles and community support

The ceremony opens the door—integration is how we walk through it.
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = placeholderPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Sacred Counsel Blog`,
      description: post.excerpt,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(placeholderPosts).map((slug) => ({ slug }));
}

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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = placeholderPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="container relative z-10 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories?.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
              >
                {categoryLabels[cat] || cat}
              </span>
            ))}
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium max-w-4xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Author & Date */}
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-[var(--color-sand-dark)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center text-[var(--color-forest)] font-medium">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-[var(--color-charcoal)]">
                  {post.author.name}
                </p>
                <p className="text-sm text-[var(--color-charcoal-light)]">
                  {post.author.role} • {formatDate(post.publishedAt)}
                </p>
              </div>
            </div>

            {/* Body - Markdown-style rendering */}
            <div className="prose prose-lg max-w-none prose-headings:text-[var(--color-charcoal)] prose-headings:font-medium prose-p:text-[var(--color-charcoal-light)] prose-li:text-[var(--color-charcoal-light)] prose-strong:text-[var(--color-charcoal)]">
              {post.body.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl mt-12 mb-6">
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-xl mt-8 mb-4">
                      {line.replace('### ', '')}
                    </h3>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="ml-4">
                      {line.replace('- ', '')}
                    </li>
                  );
                }
                if (line.startsWith('...')) {
                  return (
                    <p key={i} className="text-[var(--color-charcoal-light)]">
                      {line}
                    </p>
                  );
                }
                if (line.trim() === '') {
                  return null;
                }
                return (
                  <p key={i} className="mb-4">
                    {line}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-[var(--color-sand)] rounded-2xl text-center">
              <h3 className="text-xl font-medium text-[var(--color-charcoal)] mb-4">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-[var(--color-charcoal-light)] mb-6">
                Schedule a free discovery call to discuss your intentions and see if our offerings are right for you.
              </p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-forest)] text-white rounded-lg font-medium hover:bg-[var(--color-forest-dark)] transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
