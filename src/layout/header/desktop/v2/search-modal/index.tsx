import { Container } from '@/src/components/container';
import { TextInput } from '@/src/components/inputs/text-input';
import { Button } from '@/src/components/button';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// List of all available services for search
const availableServices = [
  { slug: 'ai-strategy-consulting', title: 'AI Strategy & Consulting' },
  { slug: 'website-development', title: 'Website Development' },
  { slug: 'cloud-integration-devops', title: 'Cloud Integration & DevOps' },
  { slug: 'data-analytics-visualization', title: 'Data Analytics & Visualization' },
  { slug: 'generative-ai-machine-learning', title: 'Generative AI & Machine Learning' },
  { slug: 'mobile-app-development', title: 'Mobile App Development' },
  { slug: 'salesforce-crm-solutions', title: 'Salesforce CRM Solutions' },
  { slug: 'search-engine-optimization', title: 'Search Engine Optimization' },
  { slug: 'api-development', title: 'API Development' },
];

// Fuzzy search function to match services
const fuzzySearch = (query: string, services: { slug: string; title: string }[]) => {
  if (!query) return [];
  
  const lowerQuery = query.toLowerCase();
  return services.filter(service => {
    return service.title.toLowerCase().includes(lowerQuery) || 
           service.slug.toLowerCase().replace(/-/g, ' ').includes(lowerQuery);
  });
};

interface Props {
  setIsModalOpen: (open: boolean) => void;
}

export function SearchModal({ setIsModalOpen }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof availableServices>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setShowDropdown(false);
    } else {
      const results = fuzzySearch(query, availableServices);
      setSearchResults(results);
      setShowDropdown(true);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchQuery.trim() === '') return;
    
    const results = fuzzySearch(searchQuery, availableServices);
    if (results.length > 0) {
      // Navigate to the first result
      router.push(`/services/${results[0].slug}`);
      setIsModalOpen(false);
    }
  };

  // Handle service selection from dropdown
  const handleServiceSelect = (serviceSlug: string) => {
    router.push(`/services/${serviceSlug}`);
    setIsModalOpen(false);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-111 h-full w-full">
      <div
        className="absolute inset-0 z-444"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div
        className="relative z-444 flex min-h-[320px] items-center bg-accent-300 dark:bg-accent-700"
        onClick={(e) => e.stopPropagation()}
      >
        <Container>
          <div className="mx-auto max-w-[560px]" ref={searchRef}>
            <div className="flex items-center gap-0">
              <TextInput
                placeholder="Search Here"
                name="text"
                className="rounded-5 rounded-r-none border-none bg-white text-black dark:text-black"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button
                type="button"
                onClick={handleSearch}
                className="!h-[60px] !w-[60px] flex-none rounded-l-none bg-primary !p-0 after:hidden hover:bg-primary-light hover:text-white dark:hover:text-white"
              >
                <span className="relative z-1">
                  <FaMagnifyingGlass />
                </span>
              </Button>
            </div>

            {/* Dropdown results */}
            {showDropdown && (
              <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg dark:bg-accent-900 border border-accent-200 dark:border-accent-800 max-h-[300px] overflow-auto">
                {searchResults.length > 0 ? (
                  <ul className="py-1">
                    {searchResults.map((service) => (
                      <li 
                        key={service.slug}
                        className="px-4 py-3 hover:bg-accent-100 dark:hover:bg-accent-800 cursor-pointer text-accent-700 dark:text-white"
                        onClick={() => handleServiceSelect(service.slug)}
                      >
                        {service.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-accent-700 dark:text-white mb-2">No services found</p>
                    <Link 
                      href="/contact" 
                      className="text-primary hover:underline inline-block"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Contact us for custom solutions
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
        <button
          aria-label="search modal handler"
          className="absolute right-7 top-2.5 z-10 grid h-[60px] w-[60px] place-items-center rounded-5 bg-primary text-[30px] text-white transition-colors duration-350 hover:bg-primary-light"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
