import { TeamSectionProps } from '@/src/sections/team/v2';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'Meet Our Team',
    title: 'Transforming Challenges into Seamless Solutions',
  },
  description: 'At the heart of our company is a passionate team of technologists, designers, strategists, and engineers committed to turning bold ideas into powerful digital experiences. With deep expertise across a wide spectrum of modern technologies, our team brings together AI and machine learning specialists, cloud & DevOps architects, mobile and web developers, data analysts, SEO strategists, and Salesforce CRM experts — all under one roof.',
  additionalContent: {
    mainImage: {
      src: '/assets/images/team/main.png',
      alt: 'Our Team',
    },
    paragraphs: [
      '🔹 Who We Are',
      'We\'re a collective of forward-thinkers, problem-solvers, and innovators. Each team member brings their own blend of creativity and technical expertise, ensuring we deliver solutions that are not only functional — but future-ready. Whether you\'re looking to build a scalable application, harness the power of generative AI, or optimize your online presence, we have the talent and experience to bring your vision to life.',
      '🔹 Our Promise',
      'We don\'t just deliver projects. We build partnerships. Our team is here to collaborate, advise, build, and evolve with you — from MVP to enterprise-scale deployments.',
      'Let\'s shape the future of digital experiences together.',
    ]
  },
  cards: []
};
