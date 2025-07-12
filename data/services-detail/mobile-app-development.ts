import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'mobile-app-development',
  title: 'Mobile App Development',
  mainImage: {
    src: '/assets/images/service-details/mobile-app-development/main.png',
    alt: 'Mobile App Development',
  },
  secondaryImage: {
    src: '/assets/images/service-details/mobile-app-development/secondary-image.png',
    alt: 'Mobile App Development Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/mobile-app-development/secondary-image.png',
    alt: 'Mobile App Development Process',
  },
  description: [
    'We provide mobile app development services to help you create custom solutions for your business.',
    'We work with you to develop custom mobile app models that solve your specific business challenges, whether you\'re looking to improve customer engagement, optimize operations, or create entirely new products and services.',
    'From cross-platform mobile app development and scalable mobile app development to predictive analytics and recommendation systems, we have the expertise to turn your data into intelligent applications that drive business value and competitive advantage.'
  ],
  features: [
    {
      title: 'Custom Mobile App Development',
      description: 'We build custom mobile apps tailored to your specific business needs, using your data to solve unique challenges.'
    },
    {
      title: 'Cross-Platform Mobile App Development',
      description: 'App development for iOS and Android platforms using Flutter, React Native, or other cross-platform frameworks.'
    },
    {
        title: 'Maintenance & Updates',
        description: 'We provide regular maintenance and updates to ensure your mobile apps remain secure, performant, and aligned with your evolving business needs.'
      },
      {
        title: 'Website to Mobile App Migration',
        description: 'We help you migrate your website to a mobile app, ensuring a seamless user experience and improved engagement.'
      }

  ],
  implementations: [
    {
      title: 'Cross-Platform Mobile App Development',
      description: 'We ensure all AI implementations follow ethical guidelines and best practices for fairness, transparency, and privacy protection.'
    },
    {
      title: 'Scalable Mobile App Development',
      description: 'We design and implement the infrastructure needed to develop, deploy, and maintain machine learning models at scale.'
    },
    {
      title: 'Cross-Platform Mobile App Development',
      description: 'We implement systems that continuously learn and improve from new data, ensuring your AI solutions become more effective over time.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'Mobile App Development Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We unlock the transformative potential of mobile app development, creating intelligent systems that learn, adapt, and generate value across every aspect of your business.'
};
