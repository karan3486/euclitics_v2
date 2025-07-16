import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';
import { RecentBlogs } from '@/src/components/footer/recent-blogs';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Euclitics is a leading IT solutions provider that offers a range of services to help businesses thrive in the digital age.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
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
  },
  columnOne: {
    title: 'Services Link',
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
        label: 'Website Development',
        href: '/services/website-development',
        openNewTab: false,
      },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-app-development',
        openNewTab: false,
      },
      {
        label: 'Search Engine Optimization',
        href: '/services/search-engine-optimization',
        openNewTab: false,
      },
      {
        label: 'API Development',
        href: '/services/api-development',
        openNewTab: false,
      },
      {
        label: 'Custom Software Development',
        href: '/services/custom-software-development',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Address',
    location: 'Fremont, CA 94536, USA',
    mails: ['info@euclitics.com'],
    phoneNumbers: ['(747) 295-9996'],
  },
  columnThree: {
    title: 'Recent Blog',
    // Using the dynamic RecentBlogs component instead of static data
    blogComponent: <RecentBlogs />,
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
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
};
