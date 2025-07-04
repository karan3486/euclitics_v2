import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

import linkLogo from 'public/assets/images/brand/linklogo.png';

export function BrandLogo() {
  return (
    <CustomLink href="/" className="flex items-center gap-2">
      <Image
        className="logo"
        src={linkLogo.src}
        width={40}
        height={40}
        placeholder="blur"
        blurDataURL={linkLogo.blurDataURL}
        alt="Euclitics logo"
        sizes="100vw"
        priority
      />
      <span className="text-lg font-bold text-primary dark:text-white transition-colors">
        Euclitics
      </span>
    </CustomLink>
  );
}
