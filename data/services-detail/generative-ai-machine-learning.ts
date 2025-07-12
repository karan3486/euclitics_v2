import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'generative-ai-machine-learning',
  title: 'Generative AI & Machine Learning',
  mainImage: {
    src: '/assets/images/service-details/generative-ai-machine-learning/main.png',
    alt: 'Generative AI & Machine Learning',
  },
  secondaryImage: {
    src: '/assets/images/service-details/generative-ai-machine-learning/secondary-image.png',
    alt: 'Generative AI & Machine Learning Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/generative-ai-machine-learning/secondary-image.png',
    alt: 'Generative AI & Machine Learning Process',
  },
  description: [
    'Harness the power of generative AI and machine learning to create innovative solutions that transform your business. Our team of AI specialists helps you identify and implement cutting-edge technologies that automate processes, generate content, and deliver personalized experiences.',
    'We work with you to develop custom machine learning models that solve your specific business challenges, whether you\'re looking to improve customer engagement, optimize operations, or create entirely new products and services.',
    'From natural language processing and computer vision to predictive analytics and recommendation systems, we have the expertise to turn your data into intelligent applications that drive business value and competitive advantage.'
  ],
  features: [
    {
      title: 'Custom AI Model Development',
      description: 'We build and train machine learning models tailored to your specific use cases, using your data to solve unique business challenges.'
    },
    {
      title: 'Generative AI Applications',
      description: 'We implement generative AI solutions for content creation, design assistance, code generation, and other creative and analytical tasks.'
    },
    {
      title: 'AI Agent Development',
      description: 'We build and train AI agents that can perform tasks autonomously, using your data to solve unique business challenges.'
    },
    {
      title: 'AI Chatbot Development',
      description: 'Custom AI chatbots that can perform tasks autonomously, using your data to improve user experience and automate customer interactions.'
    }
  ],
  implementations: [
    {
      title: 'Responsible AI Practices',
      description: 'We ensure all AI implementations follow ethical guidelines and best practices for fairness, transparency, and privacy protection.'
    },
    {
      title: 'Scalable ML Infrastructure',
      description: 'We design and implement the infrastructure needed to develop, deploy, and maintain machine learning models at scale.'
    },
    {
      title: 'Continuous Learning',
      description: 'We implement systems that continuously learn and improve from new data, ensuring your AI solutions become more effective over time.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'Machine Learning Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We unlock the transformative potential of AI and machine learning, creating intelligent systems that learn, adapt, and generate value across every aspect of your business.'
};
