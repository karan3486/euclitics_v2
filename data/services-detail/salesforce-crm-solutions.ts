import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'salesforce-crm-solutions',
  title: 'Salesforce CRM Solutions',
  mainImage: {
    src: '/assets/images/service-details/salesforce-crm-solutions/main.png',
    alt: 'Salesforce CRM Solutions',
  },
  secondaryImage: {
    src: '/assets/images/service-details/salesforce-crm-solutions/secondary-image.png',
    alt: 'Salesforce CRM Solutions Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/salesforce-crm-solutions/secondary-image.png',
    alt: 'Salesforce CRM Solutions Process',
  },
  description: [
    'Maximize your customer relationships and streamline your sales processes with our Salesforce CRM solutions. As certified Salesforce partners, we help businesses implement, customize, and optimize the world\'s leading CRM platform to meet their specific needs.',
    'Our Salesforce experts work with you to design a CRM strategy that aligns with your business goals, whether you\'re looking to improve lead management, enhance customer service, or gain deeper insights into your sales pipeline.',
    'We enhance Sales Cloud with lead and opportunity management, sales automation, forecasting, and custom development using objects, flows, and Apex. We optimize Service Cloud with case automation, knowledge base setup, omni-channel support with live agents, and full field service implementation.'
  ],
  features: [
    {
      title: 'Custom Salesforce Implementation',
      description: 'We configure Salesforce to match your unique business processes, ensuring maximum adoption and value from your CRM investment.'
    },
    {
      title: 'Experience Cloud (Community)',
      description: 'We build custom-branded partner and customer portals using Lightning Web Components in Experience Cloud, with role-based access and secure content sharing.'
    },{
      title: 'Agentforce / Field Service Lightning',
      description: 'We offer mobile workforce management with optimized route planning, custom LWC components for field agents, and tools to manage shifts, territories, and scheduling policies.'
    },
    {
      title: 'Admin & Support Services',
      description: 'We provide ongoing maintenance, user training, performance optimization, and regular health and security reviews to ensure long-term success.'
    }
  ],
  implementations: [
    {
      title: 'Strategic CRM Planning',
      description: 'We help you develop a comprehensive CRM strategy that aligns with your business objectives and provides a roadmap for successful implementation.'
    },
    {
      title: 'User-Centric Design',
      description: 'We create intuitive interfaces and workflows that encourage user adoption and make it easy for your team to leverage the full power of Salesforce.'
    },
    {
      title: 'Continuous Improvement',
      description: 'We provide ongoing support, training, and optimization to ensure your Salesforce environment evolves with your business needs and leverages new platform capabilities.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'Salesforce Expert Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We transform how businesses manage customer relationships through strategic Salesforce implementations that drive efficiency, insight, and growth.'
};
