import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import { FaPlus } from 'react-icons/fa6';

export interface WorkprocessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  count: string;
}

export function WorkprocessCard({
  icon,
  title,
  description,
  count,
  link,
}: WorkprocessCardProps) {
  return (
    <div className="relative whitespace-normal rounded-5 bg-accent-100 p-6  dark:bg-accent-700 lg:p-10">
      <div className="flex items-center gap-5">
        <div className="relative flex-none">
          <span className="absolute -top-3 inline-block h-16 w-16 rounded-full bg-primary"></span>
          <span className="relative -left-3 top-3 z-1 text-white">{icon}</span>
        </div>
        <h3 className="h3 text-accent-900 dark:text-white">{title}</h3>
      </div>
      <p className="mt-6">{description}</p>
      <div className="mt-7 pr-[120px]">
        <Button
          asChild
          className={cn(
            '!min-h-fit gap-2.5 bg-transparent !p-0  uppercase text-accent-800 hover:bg-transparent dark:text-primary',

            // Prevent default button styles
            'after:hidden'
          )}
        >
          <CustomLink
            href={link}
            aria-label={`${title}'s work process, click here for read more`}
          >
            <span>Read More</span>
          <span className="relative -top-px text-sm/[1]">
                      <FaPlus />
                    </span>
          </CustomLink>
        </Button>
      </div>
      <span className="absolute -bottom-5 right-5 z-1 text-[68px] font-bold text-primary/10 dark:text-white/10">
        {count}
      </span>
    </div>
  );
}
