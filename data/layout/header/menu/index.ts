import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    // title: 'Home',
    // subMenuItems: [
    //   {
    //     label: 'Home One',
    //     href: '/home-1',
    //   },
    //   {
    //     label: 'Home Two',
    //     href: '/home-2',
    //   },
    // ],
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    subMenuItems: [
      {
        label: 'All Services',
        href: '/services',
      },
      {
        label: 'AI Strategy & Consulting',
        href: '/services/ai-strategy-consulting',
      },
      {
        label: 'Data Analytics & Visualization',
        href: '/services/data-analytics-visualization',
      },
      {
        label: 'Website Development',
        href: '/services/website-development',
      },
      {
        label: 'Salesforce CRM Solutions',
        href: '/services/salesforce-crm-solutions',
      },
      {
        label: 'Cloud Integration & DevOps',
        href: '/services/cloud-integration-devops',
      },
      {
        label: 'Generative AI & Machine Learning',
        href: '/services/generative-ai-machine-learning',
      },
      {
        label: 'Mobile App Development',
        href: '/services/mobile-app-development',
      },
      {
        label: 'Search Engine Optimization',
        href: '/services/search-engine-optimization',
      },
      {
        label: 'API Development',
        href: '/services/api-development',
      },
    ],
  },
  {
    // title: 'Project',
    // subMenuItems: [
    //   {
    //     label: 'Project List',
    //     href: '/project',
    //   },
    //   {
    //     label: 'Project single',
    //     href: '/project/single',
    //   },
    // ],
    label: 'Projects',
    href: '/project',
  },
  {
    title: 'Blog',
    subMenuItems: [
      {
        label: 'Blog List',
        href: '/blog',
      },
      {
        label: 'Blog single',
        href: '/blog/example-post',
      },
    ],
    // label: 'Blogs',
    // href: '/blog',
  },
  {
    title: 'Pages',
    subMenuItems: [
      {
        label: 'Testimonial',
        href: '/testimonial',
      },
      {
        label: 'Team',
        href: '/team',
      },
      {
        label: 'Pricing',
        href: '/pricing',
      },
      {
        label: 'FAQ',
        href: '/faq',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
