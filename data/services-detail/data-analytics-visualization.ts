import { ServiceDetailProps } from './types';

export const serviceDetail: ServiceDetailProps = {
  slug: 'data-analytics-visualization',
  title: 'Data Analytics & Visualization',
  mainImage: {
    src: '/assets/images/service-details/data-analytics-visualization/main.png',
    alt: 'Data Analytics & Visualization',
  },
  secondaryImage: {
    src: '/assets/images/service-details/data-analytics-visualization/secondary-image.png',
    alt: 'Data Analytics & Visualization Implementation',
  },
  tertiaryImage: {
    src: '/assets/images/service-details/data-analytics-visualization/secondary-image.png',
    alt: 'Data Analytics & Visualization Process',
  },
  description: [
    'Transform your data into compelling visual stories that drive decision-making. Our data analytics and visualization services help you uncover hidden patterns, trends, and correlations in your data to gain valuable business insights.',
    'We combine advanced analytics techniques with modern visualization tools to create interactive dashboards and reports that make complex data accessible and actionable for stakeholders at all levels of your organization.',
    'Our team of data scientists and visualization experts work with you to identify key performance indicators, design intuitive visualizations, and implement automated reporting systems that provide real-time insights into your business operations.'
  ],
  features: [
    {
      title: 'Advanced Analytics',
      description: 'We apply statistical methods, predictive modeling, and machine learning to extract meaningful insights from your structured and unstructured data.'
    },
    {
      title: 'Interactive Dashboards',
      description: 'Our custom-built dashboards provide intuitive, real-time visualizations that enable quick understanding and decision-making across your organization.'
    },
    {
      title: 'Data Storytelling',
      description: 'We create narrative-driven dashboards that clearly communicate insights and executive-level KPI dashboards with actionable metrics. Our customized reporting templates are tailored to match your brand identity.'
    },
    {
      title: 'Power BI & Tableau Implementation',
      description: 'We build custom interactive dashboards with real-time data, advanced analytics, and seamless Power BI/Tableau integration. Solutions include cross-platform deployment and impactful data storytelling.'
    }
  ],
  implementations: [
    {
      title: 'Data Strategy Development',
      description: 'We help you define a comprehensive data strategy that aligns with your business goals and maximizes the value of your data assets.'
    },
    {
      title: 'Custom Visualization Solutions',
      description: 'We design and implement tailored visualization solutions that address your specific business challenges and reporting needs.'
    },
    {
      title: 'Continuous Optimization',
      description: 'We regularly refine your analytics and dashboards to ensure they evolve with your business needs and incorporate the latest data visualization best practices.'
    }
  ],
  teamMember: {
    name: 'Karan Shrestha',
    role: 'Data Analytics Expert Team',
    image: {
      src: '/assets/images/service-details/person-3.png',
      alt: 'Karan Shrestha'
    }
  },
  testimonial: 'We transform raw data into actionable insights through powerful analytics and intuitive visualizations, helping businesses make more informed decisions with confidence.'
};
