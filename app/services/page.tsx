import { serviceSectionData } from '@/data/service-section/v1/service-list-page';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ServiceSection } from '@/src/sections/service/v2';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Euclitics | Services',
  description: 'Euclitics - IT Solutions and Services company',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Services"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Service',
          },
        ]}
      />
      <ServiceSection {...serviceSectionData} />
      <Footer />
    </>
  );
}
