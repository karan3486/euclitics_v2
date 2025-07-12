'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { Loader } from '../loader';

interface NavigationProviderProps {
  children: React.ReactNode;
}

// Client component that uses searchParams
function NavigationContent() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Show loader when navigation starts
    setIsLoading(true);

    // Hide loader after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Clean up timer
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return <Loader isLoading={isLoading} />;
}

// Main provider component with Suspense boundary
export function NavigationProvider({ children }: NavigationProviderProps) {
  return (
    <>
      <Suspense fallback={<Loader isLoading={true} />}>
        <NavigationContent />
      </Suspense>
      {children}
    </>
  );
}
