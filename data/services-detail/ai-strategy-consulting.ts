import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'ai-strategy-consulting',
  title: 'AI Strategy & Consulting',
  mainImage: {
    src: '/assets/images/service-details/ai-strategy-consulting/main.png',
    alt: 'AI Strategy & Consulting',
  },
  secondaryImage: {
    src: '/assets/images/service-details/ai-strategy-consulting/secondary-image.png',
    alt: 'AI Strategy & Consulting Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/ai-strategy-consulting/secondary-image.png',
    alt: 'AI Strategy & Consulting Process',
  },
  description: [
    'We help you define your AI strategy and implement it effectively, ensuring you stay ahead of the curve in the digital landscape. Whether you\'re just starting or scaling your AI adoption, our team provides end-to-end support—from business case development to deployment.',
    'Our consulting approach ensures alignment between your AI initiatives and your long-term business vision. By combining data-driven insights, advanced machine learning, and ethical AI practices, we empower your teams to drive real transformation.',
    'Our team works closely with stakeholders to assess existing capabilities, identify growth areas, and implement AI tools that enhance productivity, customer experience, and innovation. With ongoing monitoring and optimization, we ensure your AI systems continue to perform long after deployment.'
  ],
  features: [
    {
      title: 'Data to Decisions',
      description: 'We translate your raw data into actionable intelligence with the help of custom AI frameworks and strategic models.'
    },
    {
      title: 'Innovation Enablement',
      description: 'We research emerging AI applications, facilitate partnerships with tech providers and research institutions, and host strategic sessions to identify industry‑specific use cases.'
    },
    {
      title: 'Customized Roadmap',
      description: 'We create a tailored AI strategy that aligns with your business goals, including timelines, milestones, and resource allocation.'
    },
    {
      title: 'End-to-End AI Implementation',
      description: 'From defining use cases to productionizing models, we deliver practical, scalable AI solutions tailored to your business.'
    }
  ],
  implementations: [
    {
      title: 'Best Implementation',
      description: 'Our structured roadmap ensures rapid integration of AI tools with minimal disruption—making your business smarter and future-ready.'
    },
    {
      title: 'Design made for you',
      description: 'We customize every AI solution to your exact needs, making sure it integrates smoothly with your data and operations.'
    },
    {
      title: 'Finished the process',
      description: 'Once deployed, we don\'t walk away. We train your team, monitor the models, and help you scale responsibly over time.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'AI Expert Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We help businesses evolve through intelligent transformation—offering expert AI guidance every step of the way, with clarity, confidence, and measurable results.'
};
