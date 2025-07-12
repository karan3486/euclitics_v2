import Image from 'next/image';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { cn } from '@/src/utils/shadcn';
import { missionSectionData } from '@/data/mission-section/v1';

import missionImage from 'public/assets/images/mission/mission.png';

export interface MissionSectionProps {
  className?: string;
}

export function MissionSection({ className }: MissionSectionProps) {
  return (
    <section className={cn('section-padding-primary', className)}>
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Image Column */}
          <div className="relative order-2 w-full overflow-hidden rounded-5 lg:order-1 lg:w-1/2 lg:mt-32">
            <Image
              src={missionImage}
              alt="Our Mission"
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
              width={600}
              height={400}
              placeholder="blur"
            />
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-primary/20 to-transparent opacity-60"></div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 w-full lg:order-2 lg:w-1/2">
            <SectionHeading
              title={missionSectionData.sectionHeading.title}
              subtitle={missionSectionData.sectionHeading.subtitle}
              className="mb-6 text-left"
            />
            <div className="space-y-6">
              <p className="text-accent-900 dark:text-body">
                {missionSectionData.mainText}
              </p>
              <p className="mt-5 md:mt-[1.875rem] text-accent-900 dark:text-body">
                {missionSectionData.additionalText}
              </p>
              <div className="mt-7 flex flex-col md:flex-row gap-4 text-accent-900 dark:text-white md:mt-10">
                {missionSectionData.keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group flex flex-1 min-h-[64px] items-center gap-3 rounded-5 border border-primary px-4 py-2 md:min-h-[70px] md:px-3 md:py-2"
                    data-aos="fade-up"
                    data-aos-delay={200 + (index * 150)}
                  >
                    <span className="duration flex-none scale-100 transition-transform ease-linear group-hover:scale-90 rounded-full bg-primary p-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <h3 className="text-sm font-bold leading-tight md:text-base">{point}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
