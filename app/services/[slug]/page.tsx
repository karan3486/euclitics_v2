import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceDetailsSection } from '@/src/sections/service-details/v1';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Import all service data to generate static paths and get metadata
import { serviceDetail as aiStrategyConsulting } from '@/data/services-detail/ai-strategy-consulting';
import { serviceDetail as generativeAiMachineLearning } from '@/data/services-detail/generative-ai-machine-learning';
import { serviceDetail as websiteDevelopment } from '@/data/services-detail/website-development';
import { serviceDetail as cloudIntegrationDevops } from '@/data/services-detail/cloud-integration-devops';
import { serviceDetail as dataAnalyticsVisualization } from '@/data/services-detail/data-analytics-visualization';
import { serviceDetail as salesforceCrmSolutions } from '@/data/services-detail/salesforce-crm-solutions';
import { serviceDetail as mobileAppDevelopment } from '@/data/services-detail/mobile-app-development';
import { serviceDetail as searchEngineOptimization } from '@/data/services-detail/search-engine-optimization';

// Create a map of all services for easy lookup
const serviceDetailsMap: Record<string, typeof aiStrategyConsulting> = {
  'ai-strategy-consulting': aiStrategyConsulting,
  'generative-ai-machine-learning': generativeAiMachineLearning,
  'website-development': websiteDevelopment,
  'cloud-integration-devops': cloudIntegrationDevops,
  'data-analytics-visualization': dataAnalyticsVisualization,
  'salesforce-crm-solutions': salesforceCrmSolutions,
  'mobile-app-development': mobileAppDevelopment,
  'search-engine-optimization': searchEngineOptimization,
};

// Generate metadata based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const serviceData = serviceDetailsMap[params.slug];
  
  if (!serviceData) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `Euclitics | ${serviceData.title}`,
    description: `${serviceData.title} - IT Solutions and Services by Euclitics`,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  // Check if the service exists
  if (!serviceDetailsMap[params.slug]) {
    notFound();
  }

  const serviceData = serviceDetailsMap[params.slug];

  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title={serviceData.title}
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Services',
            href: '/services',
          },
          {
            label: serviceData.title,
          },
        ]}
      />
      <ServiceDetailsSection slug={params.slug} />
      <Footer />
    </>
  );
}

// Generate static paths for all services
export async function generateStaticParams() {
  return Object.keys(serviceDetailsMap).map((slug) => ({
    slug,
  }));
}
