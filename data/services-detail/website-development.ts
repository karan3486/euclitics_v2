import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'website-development',
  title: 'Website & Web App Development',
  mainImage: {
    src: '/assets/images/service-details/website-development/main.png',
    alt: 'Website Development',
  },
  secondaryImage: {
    src: '/assets/images/service-details/website-development/secondary-image.png',
    alt: 'Website Development Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/website-development/secondary-image.png',
    alt: 'Website Development Process',
  },
  description: [
    'Looking to build a website or web application that truly represents your business? Our team specializes in creating modern, user-friendly, and scalable digital solutions tailored to your unique needs.',
    'Whether you need a sleek business website, a customer portal, or a custom internal tool, we design and develop solutions that work seamlessly across all devices. We focus on both design and functionality—ensuring your site not only looks great but also performs reliably.',
    'From simple landing pages to complex e-commerce platforms, we create websites that not only look professional but also deliver a seamless user experience. Our team uses the latest technologies and best practices to ensure your website is fast, secure, and easy to navigate.',
    'Using the latest technologies and best practices, we deliver fast, secure, and easy-to-manage websites and web apps that help you grow your business, reach more customers, and streamline your operations.',
    'Partner with us to turn your ideas into smart, functional digital experiences that drive real results.'
  ],
  features: [
    {
      title: 'Custom Web & App Development',
      description: 'We design and build modern websites and web applications tailored to your business goals—whether it\'s attracting customers, managing internal workflows, or launching digital services.'
    },
    {
      title: 'Responsive & User-Centered Design',
      description: 'We create websites and web apps that look great on any device and provide an intuitive user experience, ensuring your audience can interact with your site seamlessly.'
    },
    {
      title: 'AI-Powered Features',
      description: 'Enhance your platform with smart tools like chatbots, recommendations, and predictive systems that automate tasks and improve decision-making.'
    },
    {
      title: 'Maintenance & Updates',
      description: 'We provide regular maintenance and updates to ensure your web applications and APIs remain secure, performant, and aligned with your evolving business needs.'
    }
  ],
  implementations: [
    {
      title: 'Fast & Flexible Development',
      description: 'We deliver websites and web apps quickly and efficiently, with the flexibility to adapt to changing requirements and deliver value faster.'
    },
    {
      title: 'Mobile-Ready & User-Focused',
      description: 'Our designs work perfectly on any screen—desktop, tablet, or mobile—ensuring a smooth, enjoyable experience for your customers everywhere.'
    },
    {
      title: 'Reliable Ongoing Support',
      description: 'We don’t stop after launch. We keep your site running smoothly with updates, security monitoring, and ongoing support as your business grows.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'Web Development Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We create powerful, scalable web applications and APIs that drive digital transformation, connect systems seamlessly, and deliver exceptional user experiences.'
};
