import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// These values need to be set after creating a Sanity project
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'sacred-counsel',
  title: 'Sacred Counsel',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title('Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Retreats
            S.listItem()
              .title('Retreats')
              .schemaType('retreat')
              .child(S.documentTypeList('retreat').title('Retreats')),
            // Testimonials
            S.listItem()
              .title('Testimonials')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            // FAQs
            S.listItem()
              .title('FAQs')
              .schemaType('faq')
              .child(S.documentTypeList('faq').title('FAQs')),
            // Team
            S.listItem()
              .title('Team Members')
              .schemaType('teamMember')
              .child(S.documentTypeList('teamMember').title('Team Members')),
            S.divider(),
            // Blog
            S.listItem()
              .title('Blog Posts')
              .schemaType('blogPost')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
