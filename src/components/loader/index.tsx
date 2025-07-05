'use client';

import { cn } from '@/src/utils/shadcn';
import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

export function Loader({ isLoading }: LoaderProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-accent-900 transition-opacity duration-300',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-primary border-b-transparent border-l-transparent animate-spin animation-delay-150"></div>
        <div className="absolute inset-4 rounded-full border-4 border-t-transparent border-r-transparent border-b-primary border-l-transparent animate-spin animation-delay-300"></div>
      </div>
    </div>
  );
}
