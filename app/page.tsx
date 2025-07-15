import { projectSectionData } from '@/data/project-section/v1/list-page';
import { serviceSectionData } from '@/data/service-section/v1/service-list-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { BlogSection } from '@/src/sections/blog/v2';
import { ContactSection } from '@/src/sections/contact/v1';
import { Hero } from '@/src/sections/hero/v1';
import { HomeProjectSection } from '@/src/sections/project/v1/home-page';
// import { PricingSection } from '@/src/sections/pricing/version-1';
// import { ServiceSection } from '@/src/sections/service/v1';
import { ServiceSection } from '@/src/sections/service/v2';
// import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TeamSection } from '@/src/sections/team/v2';
// import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Euclitics | Home',
  description: 'Euclitics - IT Solutions and Services company',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <Hero />
      <ServiceSection className="!pb-0" {...serviceSectionData} showMoreButton={true} limitServices={true} />
      <AboutSection />
      {/* <CtaSection /> */}
      <HomeProjectSection {...projectSectionData} limitProjects={4} isWave={true} />
      {/* <StatisticsSection /> */}
      {/* <TestimonialSection /> */}
      {/* <PricingSection /> */}
      <TeamSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </>
  );
}
