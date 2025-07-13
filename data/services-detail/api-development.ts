import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'api-development',
  title: 'API Development',
  mainImage: {
    src: '/assets/images/service-details/api-development/main.png',
    alt: 'API Development',
  },
  secondaryImage: {
    src: '/assets/images/service-details/api-development/secondary-image.png',
    alt: 'API Development Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/api-development/secondary-image.png',
    alt: 'API Development Process',
  },
  description: [
    'Our API development services enable seamless integration between systems, applications, and platforms, creating powerful digital ecosystems that drive your business forward. We design and implement robust, scalable APIs that connect disparate systems and unlock the full potential of your data and services.',
    'Whether you need RESTful APIs, GraphQL implementations, or specialized API integrations, our team delivers solutions that are secure, performant, and built to industry standards. We focus on creating developer-friendly interfaces with comprehensive documentation and testing frameworks.',
    'From API strategy and architecture to development, testing, and ongoing maintenance, we provide end-to-end services that ensure your APIs meet both current requirements and future business needs, enabling digital transformation and innovation across your organization.'
  ],
  features: [
    {
      title: 'RESTful API Development',
      description: 'We build standards-compliant, resource-oriented RESTful APIs that are scalable, maintainable, and follow best practices for HTTP methods, status codes, and resource naming.'
    },
    {
      title: 'GraphQL Implementation',
      description: 'We develop flexible GraphQL APIs that allow clients to request exactly the data they need, reducing over-fetching and under-fetching while simplifying frontend development.'
    },
    {
      title: 'API Integration Services',
      description: 'We connect your systems with third-party services and platforms through custom API integrations, enabling seamless data flow and process automation.'
    },
    {
      title: 'API Documentation & Testing',
      description: 'We provide comprehensive API documentation using tools like Swagger/OpenAPI, along with thorough testing frameworks to ensure reliability and performance.'
    }
  ],
  implementations: [
    {
      title: 'Microservices Architecture',
      description: 'We design and implement APIs as part of microservices architectures, enabling modular, independently deployable services that improve scalability and development velocity.'
    },
    {
      title: 'API Gateway Solutions',
      description: 'We implement API gateways that handle authentication, rate limiting, monitoring, and other cross-cutting concerns for your API ecosystem.'
    },
    {
      title: 'API Versioning & Evolution',
      description: 'We establish robust versioning strategies that allow your APIs to evolve while maintaining backward compatibility and preventing disruption to existing clients.'
    }
  ],
  teamMember: {
    name: 'Alex Chen',
    role: 'API Development Team',
    image: {
      src: '/assets/images/service-details/person-2.png',
      alt: 'Alex Chen'
    }
  },
  testimonial: 'We build the digital bridges that connect your systems, applications, and users, creating seamless experiences and unlocking new possibilities through powerful, well-designed APIs.'
};