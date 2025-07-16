import { ServiceSectionProps } from '@/src/sections/service/v2';

import Image from 'next/image';

function Icon1() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-1.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon2() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-2.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon3() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-3.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon4() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-4.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon5() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-5.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon6() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-6.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon7() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-7.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon8() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-8.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon9() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-9.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

function Icon10() {
  return (
    <Image
      src="/assets/images/service/service-icons/service-10.png"
      alt="Service Icon"
      width={65}
      height={65}
    />
  );
}

export const serviceSectionData: ServiceSectionProps = {
  sectionHeading: {
    subtitle: 'Our Services',
    title: 'What We Offer',
    description: 'Explore our comprehensive range of IT solutions designed to help your business thrive in the digital landscape.',
  },
  services: [
    {
      image: {
        src: '/assets/images/service/service-1.png',
        alt: 'AI Strategy & Consulting',
      },  
      icon: <Icon1 />,
      title: 'AI Strategy & Consulting',
      description:
        'We help you define your AI strategy and implement it effectively, ensuring you stay ahead of the curve in the digital landscape.',
      slug: '/services/ai-strategy-consulting',
    },
    {
      image: {
        src: '/assets/images/service/service-2.png',
        alt: 'Data Analytics & Visualization',
      },
      icon: <Icon2 />,
      title: 'Data Analytics & Visualization',
      description:
        'We provide data analytics and visualization services to help you make informed decisions based on data-driven insights.',
      slug: '/services/data-analytics-visualization',
    },
    {
      image: {
        src: '/assets/images/service/service-3.png',
        alt: 'Data Analytics & Visualization',
      },
      icon: <Icon3 />,
      title: 'Website Development',
      description:
        'We provide website development services to help you create custom solutions for your business.',
      slug: '/services/website-development',
    },
    {
      image: {
        src: '/assets/images/service/service-4.png',
        alt: 'Salesforce CRM Solutions',
      },
      icon: <Icon4 />,
      title: 'Salesforce CRM Solutions',
      description:
        'We provide Salesforce CRM solutions to help you manage your customer relationships and improve your business processes.',
      slug: '/services/salesforce-crm-solutions',
    },
    {
      image: {
        src: '/assets/images/service/service-5.png',
        alt: 'Cloud Integration & DevOps Pipelines',
      },
      icon: <Icon5 />,
      title: 'Cloud Integration & DevOps Pipelines',
      description:
        'We provide cloud integration and DevOps pipeline services to help you automate your processes and improve your business processes.',
      slug: '/services/cloud-integration-devops',
    },
    {
      image: {
        src: '/assets/images/service/service-6.png',
        alt: 'Generative AI & Machine Learning',
      },
      icon: <Icon6 />,
      title: 'Generative AI & Machine Learning',
      description:
        'We provide generative AI and machine learning services to help you create custom solutions for your business.',
      slug: '/services/generative-ai-machine-learning',
    },
    {
      image: {
        src: '/assets/images/service/service-7.png',
        alt: 'Mobile App Development',
      },
      icon: <Icon7 />,
      title: 'Mobile App Development',
      description:
        'We provide mobile app development services to help you create custom solutions for your business.',
      slug: '/services/mobile-app-development',
    },
    {
      image: {
        src: '/assets/images/service/service-8.png',
        alt: 'Search Engine Optimization',
      },
      icon: <Icon8 />,
      title: 'Search Engine Optimization',
      description:
        'We provide search engine optimization services to help you improve your website\'s visibility and ranking in search engine results.',
      slug: '/services/search-engine-optimization',
    },
    {
      image: {
        src: '/assets/images/service/service-9.png',
        alt: 'API Development',
      },
      icon: <Icon9 />,
      title: 'API Development',
      description:
        'We provide API development services to help you create custom solutions for your business.',
      slug: '/services/api-development',
    },
    {
      image: {
        src: '/assets/images/service/service-10.png',
        alt: 'Custom Software Development',
      },
      icon: <Icon10 />,
      title: 'Custom Software Development',
      description:
        'We provide custom software development services to help you create custom solutions for your business.',
      slug: '/services/custom-software-development',
    },
  ],
};
