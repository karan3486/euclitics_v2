import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import { ServiceCard, ServiceProps } from 'src/components/cards/service/v2';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';

export interface ServiceSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  services: ServiceProps[];
  className?: ClassValue;
  showMoreButton?: boolean;
  limitServices?: boolean;
}

export function ServiceSection({
  sectionHeading,
  services,
  className,
  showMoreButton = false,
  limitServices = false,
}: ServiceSectionProps) {
  // If limitServices is true, only show the first 3 services
  const displayServices = limitServices ? services.slice(0, 3) : services;
  return (
    <section className={cn('section-padding-primary', className)}>
      <Container>
        <div className="mx-auto max-w-[630px]">
          <div data-aos="fade-up" data-aos-delay="100">
            <SectionHeading
              {...sectionHeading}
              alignment="center"
              hasBottomSpacing
            />
          </div>
        </div>
        {displayServices && displayServices.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
            {displayServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        )}
        
        {showMoreButton && (
          <div className="mt-12 md:mt-16 text-center" data-aos="fade-up" data-aos-delay="700">
            <CustomLink href="/services">
              <Button>More Services</Button>
            </CustomLink>
          </div>
        )}
      </Container>
    </section>
  );
}
