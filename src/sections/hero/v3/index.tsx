import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import React from 'react';

interface BreadcrumbItem {
  href?: string;
  label: string;
}

export interface HeroSectionProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function HeroSection({ title, breadcrumbItems }: HeroSectionProps) {
  return (
    <section className="section-padding-primary relative flex min-h-[300px] items-center py-10">
      {/* Background video */}
      <video 
        autoPlay 
        muted 
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/images/hero/hero-3_b.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay  */}
      <span className="absolute inset-0 bg-gradient-1 from-white/0 to-white dark:from-accent-900/0 dark:to-accent-900"></span>

      <Container>
        <div className="relative z-[4] flex flex-wrap items-center justify-between gap-x-20 gap-y-4 text-accent-900 dark:text-white lg:pt-[60px]">
          <h1 className="font-secondary text-xl font-bold lg:w-1/2">{title}</h1>
          {breadcrumbItems && breadcrumbItems.length > 0 && (
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
          )}
        </div>
      </Container>
    </section>
  );
}

const breadcrumbItemClasses = cn('h3 font-secondary');

function Breadcrumb({
  breadcrumbItems,
}: Pick<HeroSectionProps, 'breadcrumbItems'>) {
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="inline-flex items-center gap-3 md:gap-5">
          {breadcrumbItems.map((menuItem, index) => (
            <React.Fragment key={index}>
              {menuItem.href ? (
                <li className={breadcrumbItemClasses}>
                  <CustomLink
                    href={menuItem.href}
                    className="transition-colors hover:text-primary"
                  >
                    {menuItem.label}
                  </CustomLink>
                  <span className="ml-3 md:ml-5">/</span>
                </li>
              ) : (
                <li className={breadcrumbItemClasses} aria-current="page">
                  {menuItem.label}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
  return <></>;
}
