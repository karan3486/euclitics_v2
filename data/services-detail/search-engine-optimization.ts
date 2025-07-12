import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'search-engine-optimization',
  title: 'Search Engine Optimization',
  mainImage: {
    src: '/assets/images/service-details/search-engine-optimization/main.png',
    alt: 'Search Engine Optimization',
  },
  secondaryImage: {
    src: '/assets/images/service-details/search-engine-optimization/secondary-image.png',
    alt: 'Search Engine Optimization Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/search-engine-optimization/secondary-image.png',
    alt: 'Search Engine Optimization Process',
  },
  description: [
    'We provide comprehensive search engine optimization services to help improve your website\'s visibility and ranking in search engine results.',
    'Our SEO experts work with you to develop customized strategies that address your specific business goals, whether you\'re looking to increase organic traffic, improve conversion rates, or enhance your online presence.',
    'From technical SEO and on-page optimization to content strategy and link building, we have the expertise to help your website rank higher in search results, attract more qualified traffic, and drive business growth.'
  ],
  features: [
    {
      title: 'Technical SEO Audit',
      description: 'We conduct comprehensive technical audits to identify and fix issues that may be preventing search engines from properly crawling and indexing your website.'
    },
    {
      title: 'On-Page Optimization',
      description: 'We optimize your website\'s content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.'
    },
    {
      title: 'Content Strategy & Creation',
      description: 'We develop data-driven content strategies and create high-quality, SEO-optimized content that attracts and engages your target audience.'
    },
    {
      title: 'Link Building',
      description: 'We implement ethical link building strategies to increase your website\'s authority and improve rankings for competitive keywords.'
    }
  ],
  implementations: [
    {
      title: 'Local SEO Implementation',
      description: 'We optimize your online presence for local searches, including Google Business Profile optimization, local citation building, and location-specific content creation.'
    },
    {
      title: 'E-commerce SEO Strategy',
      description: 'We implement specialized SEO strategies for e-commerce websites, including product page optimization, category structure improvements, and schema markup implementation.'
    },
    {
      title: 'SEO Performance Tracking',
      description: 'We set up comprehensive tracking and reporting systems to monitor your SEO performance, providing regular insights and recommendations for continuous improvement.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'SEO Expert Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We unlock the full potential of search engine optimization, creating sustainable organic growth strategies that increase visibility, drive qualified traffic, and generate measurable business results.'
};
