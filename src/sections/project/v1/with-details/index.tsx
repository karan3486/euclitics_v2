'use client';

import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import {
  ProjectCardWithDetails,
  PortfolioCardProps,
} from '@/src/components/cards/project/v1/project-card-with-details';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';

export interface ProjectSectionWithDetailsProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  works: PortfolioCardProps[];
  isWave?: boolean;
}

export function ProjectSectionWithDetails({
  sectionHeading,
  works,
  isWave = false,
}: ProjectSectionWithDetailsProps) {
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
        {works && works.length > 0 && (
          <div className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            {works.map((work, index) => (
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
      </div>
    </section>
  );
}
