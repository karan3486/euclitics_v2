import { LinkProps } from '@/src/common-types';

export interface ServiceDetailProps {
  slug: string;
  title: string;
  mainImage: {
    src: string;
    alt: string;
  };
  secondaryImage: {
    src: string;
    alt: string;
  };
  tertiaryImage: {
    src: string;
    alt: string;
  };
  description: string[];
  features: {
    title: string;
    description: string;
  }[];
  implementations: {
    title: string;
    description: string;
  }[];
  teamMember: {
    name: string;
    role: string;
    image: {
      src: string;
      alt: string;
    };
  };
  testimonial: string;
}

export interface ServiceDetailSidebarProps {
  services: LinkProps[];
  phoneNumber: string;
}
