'use client';

import { projectSectionData } from '@/data/project-section/v1/list-page';
import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { ProjectSectionWithDetails } from '@/src/sections/project/v1/with-details';
import { ProjectDetailsProvider } from '@/src/components/project/project-details-provider';

export default function Page() {
  return (
    <ProjectDetailsProvider>
      <MainHeader version="2" />
      <HeroSection
        title="Project"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Project',
          },
        ]}
      />
      <ProjectSectionWithDetails {...projectSectionData} />
      <Footer />
    </ProjectDetailsProvider>
  );
}
