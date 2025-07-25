'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';
import { cn } from '@/src/utils/shadcn';

const activeClasses = cn('bg-primary text-white');

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-[50]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            aria-label="theme switcher"
            className="grid h-12 w-12 cursor-pointer place-items-center rounded-5 bg-primary p-0 text-white hover:bg-primary-light"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="z-111 bg-white dark:border-accent-900 dark:bg-accent-700"
        >
          <DropdownMenuItem
            className={cn(theme == 'light' && activeClasses)}
            onClick={() => setTheme('light')}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(theme == 'dark' && activeClasses)}
            onClick={() => setTheme('dark')}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className={cn(theme == 'system' && activeClasses)}
            onClick={() => setTheme('system')}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
