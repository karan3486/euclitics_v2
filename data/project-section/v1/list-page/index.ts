import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'latest portfolio',
    title: 'Where Innovation Meets IT Excellence',
  },
  isWave: false,
  works: [
    {
      slug: '/project/bayhawk-chatbot',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'portfolio-1',
      },
      title: 'Bayhawk Chatbot',
      description: 'Chatbot for student and faculty',
    },
    {
      slug: '/project/nowdo',
      image: {
        src: '/assets/images/project/2.png',
        alt: 'portfolio-1',
      },
      title: 'Nowdo App',
      description: 'Productive Task management app',
    },
    {
      slug: '/project/techgram',
      image: {
        src: '/assets/images/project/3.png',
        alt: 'portfolio-1',
      },
      title: 'Techgram social media app',
      description: 'AI Social for Tech & Business Minds.',
    },
    {
      slug: '/project/university-housing-management-system',
      image: {
        src: '/assets/images/project/4.png',
        alt: 'portfolio-1',
      },
      title: 'University Housing Management System',
      description: 'Manage university housing accommodation',
    },
    {
      slug: '/project/ai-powered-recruitment-agent',
      image: {
        src: '/assets/images/project/5.png',
        alt: 'portfolio-1',
      },
      title: 'AI-Powered Recruitment Agent',
      description: 'AI Recruitment Assistant Tool',
    },
    {
      slug: '/project/project-cost-delay-vendor-analysis',
      image: {
        src: '/assets/images/project/6.png',
        alt: 'portfolio-1',
      },
      title: 'Project Cost, Delay & Vendor Analysis',
      description: 'Focus: Budget overruns, delay risks, vendor optimization',
    },
    {
      slug: '/project/salesforce-crm-integration-for-a-growing-ecommerce-company',
      image: {
        src: '/assets/images/project/7.png',
        alt: 'portfolio-1',
      },
      title: 'Salesforce CRM Integration for a Growing E-Commerce Company',
      description: 'Unified CRM for E-Commerce: Leads, Sales & Support Aligned',
    },
    {
      slug: '/project/cloud-native-microservices-deployment-using-azure-aks-acr',
      image: {
        src: '/assets/images/project/8.png',
        alt: 'portfolio-1',
      },
      title: 'Cloud-Native Microservices Deployment Using Azure AKS & ACR',
      description: 'Scalable Microservices Deployment with Azure AKS, ACR, and DevOps',
    },
  ],
};
