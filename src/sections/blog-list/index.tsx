"use client";

import { LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';
import {
  FaArrowRight,
  FaMagnifyingGlass,
  FaRegComments,
  FaRegFolderOpen,
  FaRegUser,
} from 'react-icons/fa6';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getAllBlogTitles } from '@/data/blog-section/posts-title';

interface BlogProps {
  image: {
    src: string;
    alt: string;
  };
  authorName: string;
  category: string;
  commentCount?: string;
  title: string;
  description: string;
  slug: string;
}

interface BlogListProps {
  className?: string;
}

// interface AuthorProps {
//   image: Omit<ImageProps, 'width' | 'height'>;
//   name: string;
//   about: string;
//   socialLinks: Social[];
// }

// const authorData: AuthorProps = {
//   image: {
//     src: '/assets/images/blog/author-1.png',
//     alt: 'author image 1',
//   },
//   name: 'Naturials paul',
//   about:
//     'Aliquam eros justo, posuere lobort viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis non',
//   socialLinks: [
//     {
//       icon: <FaFacebookF />,
//       href: 'https://www.facebook.com/',
//     },
//     {
//       icon: <FaTwitter />,
//       href: 'https://twitter.com/',
//     },
//     {
//       icon: <FaInstagram />,
//       href: 'https://www.instagram.com/',
//     },
//   ],
// };

// function Author({ image, name, about, socialLinks }: AuthorProps) {
//   return (
//     <div className="space-y-5 rounded-5 bg-accent-100 p-8 text-center dark:bg-accent-700 lg:p-10">
//       <Image
//         {...image}
//         alt={image.alt || name}
//         width={127}
//         height={127}
//         className="mx-auto rounded-full object-cover"
//       />
//       <h3 className="font-secondary text-lg font-bold leading-[1.25] text-accent-900 dark:text-white md:text-xl">
//         {name}
//       </h3>
//       <p>{about}</p>
//       {socialLinks && socialLinks.length > 0 && (
//         <nav aria-label="social links">
//           <ul className="inline-flex items-center divide-x divide-accent-800/50 text-accent-900  dark:divide-accent-100/50 dark:text-white">
//             {socialLinks.map((socialLink, index) => (
//               <li key={index}>
//                 <CustomLink
//                   className="block px-4 text-base/[1.75]  transition-transform duration-350 hover:-translate-y-1 hover:text-primary"
//                   href={socialLink.href}
//                   openNewTab
//                 >
//                   <span>{socialLink.icon}</span>
//                 </CustomLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }

function SearchBox() {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Searach
      </h3>
      <div className="flex items-center gap-0">
        <TextInput
          placeholder="Your name"
          name="text"
          className="rounded-5 rounded-r-none border-none bg-white dark:bg-accent-900"
        />
        <Button
          type="submit"
          className={cn('!h-[60px] !w-[60px] flex-none rounded-l-none !p-0')}
        >
          <span className="relative z-1">
            <FaMagnifyingGlass />
          </span>
        </Button>
      </div>
    </div>
  );
}

interface CategoryListProps {
  links: LinkProps[];
}

const categoryListData: CategoryListProps = {
  links: [
    {
      label: 'Web Development',
      href: '',
    },
    {
      label: 'Machine Learning',
      href: '',
    },
    {
      label: 'Salesforce',
      href: '',
    },
    {
      label: 'Azure DevOps',
      href: '',
    },
    {
      label: 'Data Analytics',
      href: '',
    },
    {
      label: 'Generative AI',
      href: '',
    },
  ],
};

function CategoryList({ links }: CategoryListProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Category
      </h3>
      {links && links.length > 0 && (
        <nav aria-label="footer links navigation">
          <ul className="grid gap-2.5 divide-y divide-accent-700/20 dark:divide-accent-200/20">
            {links.map((link, index) => (
              <li
                key={index}
                className="flex items-center gap-2.5 pt-2.5 first:pt-0"
              >
                <span className="grid h-3 w-3 place-items-center border border-primary">
                  <span className="block h-0.5 w-0.5 bg-primary"></span>
                </span>
                <CustomLink href={link.href} className={linkClasses}>
                  {link.label}
                </CustomLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

interface TagwidgetProps {
  tags: string[];
}

const tagwidgetData: TagwidgetProps = {
  tags: ['All Project', 'Stand', 'Regularly', 'Startup', 'Productsline'],
};

function Tagswidget({ tags }: TagwidgetProps) {
  return (
    <div className="space-y-5 rounded-5 bg-accent-100 p-8 dark:bg-accent-700 lg:p-10">
      <h3 className="font-secondary text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg">
        Tags
      </h3>
      {tags && tags.length > 0 && (
        <nav aria-label="tags">
          <ul className="flex flex-wrap gap-5">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="inline-flex min-h-[2.5rem] cursor-pointer items-center rounded-5 border border-accent-900/20 px-2.5 py-0.5 text-accent-800 transition-colors duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-none dark:bg-accent-900 dark:text-body  dark:hover:bg-primary dark:hover:text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

// Repeated styles
const paginationItemClasses = cn(
  'grid h-[65px] w-[65px] place-items-center border border-[#3b3b3b] bg-accent-700 font-secondary text-base font-bold text-white rounded-full transition-colors duration-300 hover:bg-primary hover:border-primary'
);

const linkClasses = cn(
  'transition-colors duration-400 hover:text-primary ease-in-out'
);

export function BlogListSection({ className }: BlogListProps) {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [displayedBlogs, setDisplayedBlogs] = useState<BlogProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Get page size from environment variable or default to 4
  const pageSize = typeof process.env.NEXT_PUBLIC_PAGE_SIZE !== 'undefined' 
    ? parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE) 
    : 4;
  
  useEffect(() => {
    // Get blog titles from the API with pagination
    const fetchBlogTitles = async () => {
      try {
        setIsLoading(true);
        // Fetch titles from API with current page and page size
        debugger;
        const paginatedResponse = await getAllBlogTitles(currentPage, pageSize);
        
        // Convert BlogTitle items to BlogProps
        const titlesArray = paginatedResponse.items.map(title => {
          // Get API URL for image prefixing
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
          
          // Handle image URL - use API URL as prefix
          let imageSrc = title.image?.src || '/assets/images/blog/blogplaceholder.jpg';
          imageSrc = `${apiUrl}${imageSrc}`;
          
          return {
            image: {
              src: imageSrc,
              alt: title.image?.alt || title.title || 'Blog image'
            },
            authorName: title.authorName || 'Unknown',
            category: title.category || 'Uncategorized',
            commentCount: title.commentCount,
            title: title.title || 'Untitled',
            description: title.description || '',
            slug: title.slug
          };
        });
        
        // Set blogs directly from the API response
        setBlogs(titlesArray);
        
        // Use pagination metadata from API response
        setTotalPages(paginatedResponse.pages);
        
        // No need for displayedBlogs state anymore since API handles pagination
        setDisplayedBlogs(titlesArray);
      } catch (error) {
        console.error('Error fetching blog titles:', error);
        // Fallback to empty array if there's an error
        setBlogs([]);
        setDisplayedBlogs([]);
        setTotalPages(1);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogTitles();
  }, [currentPage, pageSize]); // Re-fetch when page or page size changes
  
  // No need for client-side pagination anymore since the API handles it
  // We're directly setting displayedBlogs in the fetchBlogTitles function
  
  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      // Show loading state
      setIsLoading(true);
      
      // Scroll to top of the section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Set a small timeout to simulate loading and allow scroll to complete
      setTimeout(() => {
        setCurrentPage(page);
        setIsLoading(false);
      }, 500);
    }
  };
  
  return (
    <section className={cn('section-padding-primary', className)}>
      <Container>
        <div className="grid gap-30px lg:grid-cols-[1fr_410px]">
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : blogs.length > 0 ? (
              <div className="grid gap-10 lg:gap-20">
                {displayedBlogs.map((blog, index) => (
                  <article key={index} className="group rounded-5 bg-white p-5 shadow-card dark:bg-accent-700 lg:p-8">
                    <div className="overflow-hidden rounded-5">
                      <CustomLink href={`/blog/${blog.slug}`} className="block">
                        <Image
                          src={blog.image.src}
                          alt={blog.image.alt}
                          width={770}
                          height={400}
                          className="w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </CustomLink>
                    </div>
                    <div className="mt-6 lg:mt-30px">
                      <ul className="flex flex-wrap items-center gap-5 text-sm">
                        <li className="flex items-center gap-2.5">
                          <span className="flex-none text-sm text-primary">
                            <FaRegUser />
                          </span>
                          <span>
                            <CustomLink href="#" className={linkClasses}>
                              {blog.authorName}
                            </CustomLink>
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="flex-none text-sm text-primary">
                            <FaRegFolderOpen />
                          </span>
                          <span>
                            <CustomLink href="#" className={linkClasses}>
                              {blog.category}
                            </CustomLink>
                          </span>
                        </li>
                        {blog.commentCount && (
                          <li className="flex items-center gap-2.5">
                            <span className="flex-none text-sm text-primary">
                              <FaRegComments />
                            </span>
                            <span>
                              <CustomLink href="#" className={linkClasses}>
                                Comments ({blog.commentCount})
                              </CustomLink>
                            </span>
                          </li>
                        )}
                      </ul>
                      <h3 className="font-secondary text-lg font-bold leading-[1.25] text-accent-900 dark:text-white md:text-xl">
                        <CustomLink
                          href={`/blog/${blog.slug}`}
                          className={cn(
                            linkClasses,
                            'text-accent-900 hover:text-primary dark:text-white dark:hover:text-primary'
                          )}
                        >
                          {blog.title}
                        </CustomLink>
                      </h3>
                      <div className="my-4 h-px bg-body/30 lg:my-5"></div>
                      <p>{blog.description}</p>
                      <Button
                        asChild
                        className={cn([
                          // Layout
                          'mt-6 rounded-5 border border-primary bg-transparent text-accent-900 lg:mt-30px',
                          'after:hidden',
                        ])}
                      >
                        <CustomLink href={`/blog/${blog.slug}`}>
                          <span className="relative z-1">Read More</span>
                          <span className="relative -top-px text-sm/[1]">
                            <FaPlus />
                          </span>
                        </CustomLink>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p>No blog posts available.</p>
              </div>
            )}
            
            {/* Pagination - only show when there are blogs */}
            {blogs.length > 0 && totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <ul className="flex items-center gap-2.5">
                  {/* Previous button */}
                  <li>
                    <button
                      className={paginationItemClasses}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                      aria-label="Previous page"
                    >
                      <FaArrowRight className="rotate-180" />
                    </button>
                  </li>
                  
                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <li key={page}>
                      <button
                        className={cn(
                          paginationItemClasses,
                          currentPage === page ? 'border-primary bg-primary text-white' : ''
                        )}
                        onClick={() => handlePageChange(page)}
                        aria-label={`Page ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page.toString().padStart(2, '0')}
                      </button>
                    </li>
                  ))}
                  
                  {/* Next button */}
                  <li>
                    <button
                      className={cn(
                        paginationItemClasses,
                        currentPage === totalPages ? 'opacity-50' : ''
                      )}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      <FaArrowRight />
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="grid gap-30px self-baseline max-md:mx-auto max-md:max-w-[410px] lg:gap-10">
            {/* <Author {...authorData} /> */}
            <SearchBox />
            <CategoryList {...categoryListData} />
            <Tagswidget {...tagwidgetData} />
          </div>
        </div>
      </Container>
    </section>
  );
}
