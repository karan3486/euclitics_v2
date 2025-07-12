import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'cloud-integration-devops',
  title: 'Cloud Integration & DevOps Pipelines',
  mainImage: {
    src: '/assets/images/service-details/cloud-integration-devops/main.png',
    alt: 'Cloud Integration & DevOps Pipelines',
  },
  secondaryImage: {
    src: '/assets/images/service-details/cloud-integration-devops/secondary-image.png',
    alt: 'Cloud Integration & DevOps Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/cloud-integration-devops/secondary-image.png',
    alt: 'Cloud Integration & DevOps Process',
  },
  description: [
    'Accelerate your digital transformation with our cloud integration and DevOps pipeline services. We help organizations migrate to the cloud, optimize their infrastructure, and implement continuous integration/continuous deployment (CI/CD) pipelines that streamline software delivery.',
    'Our cloud experts work with leading platforms like AWS, Azure, and Google Cloud to design scalable, secure, and cost-effective cloud architectures that meet your specific business requirements and technical constraints.',
    'By implementing DevOps best practices and automation, we help your teams deliver software faster, with higher quality, and reduced operational overhead, enabling you to respond more quickly to market changes and customer needs.'
  ],
  features: [
    {
      title: 'Cloud Migration & Optimization',
      description: 'We help you move your applications and infrastructure to the cloud securely and efficiently, while optimizing for performance, cost, and scalability.'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'We implement automated pipelines that streamline your software delivery process, from code commit to production deployment, with built-in testing and quality controls.'
    },
    {
      title: 'Microservices Architecture',
      description: 'We help you decompose monolithic applications into microservices that can be developed, deployed, and scaled independently for greater agility.'
    },
    {
      title: 'Azure & GCP Integration',
      description: 'We integrate Azure and GCP services to provide a unified platform for your cloud applications, with seamless access to compute, storage, and networking resources.'
    }
  ],
  implementations: [
    {
      title: 'Infrastructure as Code',
      description: 'We implement infrastructure as code practices to ensure consistent, version-controlled, and repeatable deployments across all environments.'
    },
    {
      title: 'Microservices Architecture',
      description: 'We help you decompose monolithic applications into microservices that can be developed, deployed, and scaled independently for greater agility.'
    },
    {
      title: 'Monitoring & Observability',
      description: 'We implement comprehensive monitoring and observability solutions that provide real-time insights into your applications and infrastructure performance.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'Cloud Architect Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We enable organizations to leverage the full potential of cloud technologies and DevOps practices, delivering faster innovation, improved reliability, and optimized operational costs.'
};
