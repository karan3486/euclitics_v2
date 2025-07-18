import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'designing-branding',
  title: 'UI/UX Designing & Branding',
  mainImage: {
    src: '/assets/images/service-details/designing-branding/main.png',
    alt: 'UI/UX Designing and Branding',
  },
  secondaryImage: {
    src: '/assets/images/service-details/designing-branding/secondary-image.png',
    alt: 'Brand Identity Design Process',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/designing-branding/secondary-image.png',
    alt: 'UI/UX Design Implementation',
  },
  description: [
    'We create compelling brand identities and intuitive user experiences that resonate with your audience and elevate your market presence. Our design team combines creativity with strategic thinking to deliver cohesive branding and user-centered digital experiences that drive engagement and loyalty.',
    'From logo design to comprehensive brand guidelines, we develop visual identities that communicate your brand values and differentiate you in the marketplace. Our branding solutions encompass everything from initial concept development to full implementation across all touchpoints.',
    'Our UI/UX design process focuses on creating seamless, intuitive experiences that delight users while achieving your business objectives. We combine aesthetic appeal with functional design, ensuring your digital products are both beautiful and effective at converting visitors into customers.'
  ],
  features: [
    {
      title: 'Brand Identity Design',
      description: 'We craft distinctive visual identities including logos, color palettes, typography, and design systems that authentically represent your brand values and resonate with your target audience.'
    },
    {
      title: 'UI/UX Design',
      description: 'Our user-centered design approach creates intuitive, engaging interfaces that enhance user satisfaction through thoughtful information architecture, wireframing, prototyping, and visual design.'
    },
    {
      title: 'Marketing Collateral',
      description: 'We design cohesive marketing materials including brochures, business cards, presentations, and digital assets that consistently communicate your brand message across all customer touchpoints.'
    },
    {
      title: 'Website Design',
      description: 'Our website designs combine aesthetic appeal with strategic functionality, creating responsive digital experiences that engage visitors, communicate your value proposition, and drive conversions.'
    }
  ],
  implementations: [
    {
      title: 'Brand Discovery Workshop',
      description: 'We begin with comprehensive research and collaborative workshops to understand your business goals, target audience, market positioning, and competitive landscape before developing design concepts.'
    },
    {
      title: 'User Research & Testing',
      description: 'Our design process incorporates user research, persona development, journey mapping, and usability testing to ensure our solutions meet real user needs and preferences.'
    },
    {
      title: 'Design System Development',
      description: 'We create comprehensive design systems with reusable components and clear guidelines that ensure consistency across all digital products and facilitate efficient future development.'
    }
  ],
  teamMember: {
    name: 'Sarah Chen',
    role: 'Creative Director',
    image: {
      src: '/assets/images/service-details/person-2.png',
      alt: 'Sarah Chen'
    }
  },
  testimonial: 'We transform brand visions into compelling visual identities and digital experiences that captivate audiences—delivering cohesive design solutions that build recognition, trust, and lasting connections with your customers.'
};
