import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { teamSectionData } from '@/data/team-section/v2';
import Image from 'next/image';
import { TeamCardProps, TeamCard } from 'src/components/cards/team/v2';
import { AOSInit } from '@/src/utils/aos';

export interface TeamSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  description: string;
  additionalContent?: {
    mainImage: {
      src: string;
      alt: string;
    };
    paragraphs: string[];
  };
  cards: TeamCardProps[];
}

export function TeamSection() {
  const { sectionHeading, description, additionalContent, cards } = teamSectionData;
  return (
    <section className="section-padding-primary !pb-0">
      <AOSInit />
      <Container>
        <div className="mb-10 flex flex-col flex-wrap justify-between gap-5 max-md:text-center md:mb-[3.75rem] xl:flex-row xl:items-end">
          <div className="xl:max-w-[460px]">
            <SectionHeading
              {...sectionHeading}
              className="max-md:text-center"
            />
          </div>
          <p className="xl:max-w-[635px]">{description}</p>
        </div>

        {additionalContent && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center mb-12">
            <div 
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Image 
                src={additionalContent.mainImage.src} 
                alt={additionalContent.mainImage.alt} 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div 
              className="flex flex-col gap-6 mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              {additionalContent.paragraphs.map((paragraph, index) => (
                <p 
                  key={index} 
                  className={`${paragraph.startsWith('🔹') || paragraph === 'Our Promise' ? 'text-xl font-semibold mt-4' : ''}`}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={`${300 + (index * 100)}`}
                  data-aos-once="true"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 gap-0 max-lg:gap-x-30px md:grid-cols-2 lg:grid-cols-1">
            {cards.map((card, index) => (
              <TeamCard {...card} key={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
