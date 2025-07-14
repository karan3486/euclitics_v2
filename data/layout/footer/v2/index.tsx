import { FooterSectionProps } from '@/src/layout/footer/v2';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { RecentBlogs } from '@/src/components/footer/recent-blogs';

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/',
    },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/',
    },
    {
      icon: <FaTwitter />,
      href: 'https://twitter.com/',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/',
    },
  ],
  columnOne: {
    title: 'Quick Links',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About us',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Services',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Projects',
        href: '/projects',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: '/blog',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Service Links',
    links: [
      {
        label: 'AI Strategy & Consulting',
        href: '/services/ai-strategy-consulting',
        openNewTab: false,
      },
      {
        label: 'Data Analytics & Visualization',
        href: '/services/data-analytics-visualization',
        openNewTab: false,
      },
      {
        label: 'Cloud Integration & DevOps',
        href: '/services/cloud-integration-devops',
        openNewTab: false,
      },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-app-development',
        openNewTab: false,
      },
      {
        label: 'Website Development',
        href: '/services/website-development',
        openNewTab: false,
      },
    ],
  },

  columnThree: {
    title: 'Recent Blog',
    // Using the dynamic RecentBlogs component instead of static data
    blogComponent: <RecentBlogs />,
  },
  columnFour: {
    title: 'Contact Us',
    phoneNumber: '+1 747 295-9996',
    mail: 'info@euclitics.com',
    location: 'Fremont, CA 94536, USA',
  },
  footerBottom: {
    copyrightText: '© Euclitics 2025 | All Rights Reserved',
    links: [
      {
        label: 'Terms & Condition',
        href: '/terms-and-conditions',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
        openNewTab: false,
      },
      {
        label: 'Careers',
        href: '/careers',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
