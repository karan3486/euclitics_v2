import { BlogSectionProps } from '@/src/sections/blog/v2';

export const blogSectionData: BlogSectionProps = {
  sectionHeading: {
    subtitle: 'our blogs',
    title: 'Where Innovation Meets IT Excellence',
  },
  ctaButton: {
    href: '/blog',
    label: 'more Blogs',
  },
  blogs: [
    {
      image: {
        src: '/assets/images/blog/blog-4.png',
        alt: 'blog-1',
      },
      slug: '/blog/advanced-encryption',
      title: 'We implement state-of-the-art encryption',
    },
    {
      image: {
        src: '/assets/images/blog/blog-5.png',
        alt: 'blog-2',
      },
      slug: '/blog/tailored-services',
      title: 'we tailor our services to meet your specific business',
    },
    {
      image: {
        src: '/assets/images/blog/blog-6.png',
        alt: 'blog-3',
      },
      slug: '/blog/streamlined-processes',
      title: 'IT solutions enhance efficiency, streamline processes',
    },
  ],
};
