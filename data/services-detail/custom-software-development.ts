import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'custom-software-development',
  title: 'Custom Software Development',
  mainImage: {
    src: '/assets/images/service-details/custom-software-development/main.png',
    alt: 'Custom Software Development',
  },
  secondaryImage: {
    src: '/assets/images/service-details/custom-software-development/secondary-image.png',
    alt: 'Custom Software Development Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/custom-software-development/secondary-image.png',
    alt: 'Custom Software Development Process',
  },
  description: [
    'We create tailor-made software solutions designed specifically for your unique business challenges. Our development team combines technical expertise with business acumen to deliver applications that drive efficiency, innovation, and competitive advantage.',
    'From concept to deployment, we follow a collaborative approach that keeps you involved at every stage. Our agile methodology ensures rapid iterations, continuous feedback, and the flexibility to adapt as your requirements evolve throughout the development lifecycle.',
    'Our custom software solutions are built with scalability and future growth in mind. We use modern architectures, clean code practices, and comprehensive testing to ensure your software remains robust, maintainable, and adaptable to changing business needs.'
  ],
  features: [
    {
      title: 'Enterprise Applications',
      description: 'We build powerful enterprise-grade applications that streamline operations, integrate with existing systems, and provide actionable insights through comprehensive reporting.'
    },
    {
      title: 'Web & Mobile Solutions',
      description: 'Our cross-platform development expertise delivers seamless user experiences across web browsers and mobile devices, ensuring your software reaches users wherever they are.'
    },
    {
      title: 'Legacy System Modernization',
      description: 'We transform outdated systems into modern, efficient applications while preserving valuable business logic and ensuring minimal disruption to your operations.'
    },
    {
      title: 'API Development & Integration',
      description: 'Our integration specialists connect disparate systems through robust APIs, enabling seamless data flow and unlocking new functionality across your technology ecosystem.'
    }
  ],
  implementations: [
    {
      title: 'Agile Development Process',
      description: 'We employ iterative development cycles with regular deliverables, ensuring transparency and allowing for continuous refinement based on real feedback.'
    },
    {
      title: 'User-Centered Design',
      description: 'Our design process focuses on creating intuitive, accessible interfaces that enhance productivity and require minimal training for your team.'
    },
    {
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive testing strategies including automated testing, performance optimization, and security validation ensure your software is reliable and secure.'
    }
  ],
  teamMember: {
    name: 'David Miller',
    role: 'Lead Software Architect',
    image: {
      src: '/assets/images/service-details/person-1.png',
      alt: 'David Miller'
    }
  },
  testimonial: 'We transform business challenges into powerful software solutions—delivering custom applications that align perfectly with your workflows, integrate seamlessly with existing systems, and scale with your business growth.'
};
