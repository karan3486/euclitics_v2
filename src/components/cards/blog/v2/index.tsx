import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image, { ImageProps } from 'next/image';
import { FaPlus } from 'react-icons/fa6';

export interface BlogProps {
  slug: string;
  image: Omit<ImageProps, 'width' | 'height'>;
  title: string;
}

// const listItemClasses = cn('inline-flex items-center gap-2.5');
// const listItemIconClasses = cn('text-sm text-primary');
const inlineFlexLayoutClasses = cn('inline-flex items-center gap-2 text-white');

export function BlogCard({ slug, image, title }: BlogProps) {
  return (
    <article className="group relative z-1 block overflow-hidden rounded-5 bg-white shadow-3 dark:bg-accent-700 dark:shadow-none h-[500px] flex flex-col">
      {/* Media  */}
      <div
        className={cn(
          'relative overflow-hidden h-[250px]', // Fixed height for image container
          // after
          'after:absolute after:inset-0 after:z-1 after:transition-all after:[transition:all_0.6s_ease-out_0s]',
          // before
          'before:absolute before:inset-0 before:z-1 before:transition-all before:[transition:all_0.6s_ease-out_0s]',

          // hover
          'group-hover:after:bottom-1/2 group-hover:after:top-1/2 group-hover:after:bg-white/20',
          'group-hover:before:left-1/2 group-hover:before:right-1/2 group-hover:before:bg-white/20'
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={640}
          height={466}
          sizes="
          (min-width:768px) 50vw, 
          (min-width:1024px) 33vw,
          100vw
          "
          className="pointer-events-none object-cover w-full h-full [transform:scale(1.05)] [transition:.5s_ease] group-hover:[transform:scale(1)]"
        />
      </div>

      {/* Content  */}
      <div className="p-30px flex-grow flex flex-col justify-between space-y-4">
        <h3 className="text-md font-bold leading-[1.25] md:text-lg line-clamp-2 overflow-hidden">
          <CustomLink
            href={slug}
            className="text-accent-900 transition-colors duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </CustomLink>
        </h3>
        <CustomLink
          href={slug}
          className={cn(
            inlineFlexLayoutClasses,
            'gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-accent-900 transition-colors duration-350 hover:text-primary dark:text-white dark:hover:text-primary mt-auto'
          )}
        >
          <span>Read More</span>
          <span className="relative -top-px text-sm/[1]">
            <FaPlus />
          </span>
        </CustomLink>
      </div>
    </article>
  );
}
