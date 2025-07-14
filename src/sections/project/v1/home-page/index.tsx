'use client';

import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import {
  ProjectCardWithDetails,
  PortfolioCardProps,
} from '@/src/components/cards/project/v1/project-card-with-details';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';

export interface HomeProjectSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  works: PortfolioCardProps[];
  isWave?: boolean;
  limitProjects?: number;
}

export function HomeProjectSection({
  sectionHeading,
  works,
  isWave = true,
  limitProjects = 4,
}: HomeProjectSectionProps) {
  // Limit the number of projects to display
  const limitedWorks = works.slice(0, limitProjects);

  return (
    <section className="section-padding-primary overflow-hidden">
      <div className="mx-auto max-w-[1762px] px-4">
        <div className="mx-auto max-w-[630px]">
          <div data-aos="fade-up" data-aos-delay="100">
            <SectionHeading
              {...sectionHeading}
              alignment="center"
              hasBottomSpacing
            />
          </div>
        </div>
        {limitedWorks && limitedWorks.length > 0 && (
          <div className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            {limitedWorks.map((work, index) => (
              <div
                key={index}
                data-aos={
                  isWave
                    ? getStaggeredDelay(['fade-down', 'fade-up'], index)
                    : 'fade-up'
                }
                data-aos-delay={getStaggeredDelay([200, 350, 500, 650], index)}
                className={cn(
                  isWave
                    ? getStaggeredDelay(['lg:mt-[70px]', 'mt-0'], index)
                    : ''
                )}
              >
                <ProjectCardWithDetails {...work} />
              </div>
            ))}
          </div>
        )}
        
        {/* See More Button */}
        <div className="mt-12 flex justify-center">
          <Button asChild className="rounded-full">
            <CustomLink href="/project" aria-label="See More Projects">
              <span>See More Projects</span>
              <svg
                width={28}
                height={9}
                viewBox="0 0 28 9"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M27.7911 5.02543C27.9863 4.83016 27.9863 4.51358 27.7911 4.31832L24.6091 1.13634C24.4138 0.941077 24.0972 0.941077 23.902 1.13634C23.7067 1.3316 23.7067 1.64818 23.902 1.84345L26.7304 4.67187L23.902 7.5003C23.7067 7.69556 23.7067 8.01214 23.902 8.20741C24.0972 8.40267 24.4138 8.40267 24.6091 8.20741L27.7911 5.02543ZM0.4375 5.17188L27.4375 5.17187L27.4375 4.17187L0.4375 4.17188L0.4375 5.17188Z" />
              </svg>
            </CustomLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
