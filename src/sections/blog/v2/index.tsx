'use client';

import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { BlogCard, BlogProps } from '../../../components/cards/blog/v2';
import { blogSectionData } from '@/data/blog-section/v2';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { LinkProps } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { useEffect, useState } from 'react';
import { BlogTitle, getAllBlogTitles } from '@/data/blog-section/posts-title';

export interface BlogSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  ctaButton: LinkProps;
  blogs: BlogProps[];
}

export function BlogSection() {
  const { sectionHeading, ctaButton } = blogSectionData;
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogTitles(1, 3); // Fetch 3 blog titles for the section
        debugger;
        // Get API URL for prefixing image paths
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
        
        // Transform the API response to match the BlogProps interface
        const transformedBlogs: BlogProps[] = response.items.map((blog: BlogTitle) => ({
          slug: `/blog/${blog.slug}`,
          image: {
            // Prefix image URL with API URL if it's a relative path
            src: `${apiUrl}${blog.image.src}`,
            alt: blog.image.alt
          },
          title: blog.title
        }));
        debugger;
        setBlogs(transformedBlogs);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog titles:', err);
        setError('Failed to load blog posts');
        // Use fallback data if API fails
        setBlogs(blogSectionData.blogs);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="mb-10 flex flex-col flex-wrap justify-between gap-x-20 gap-y-10 md:mb-[3.75rem] lg:flex-row">
          <div className=" max-w-[630px]">
            <div data-aos="fade-up" data-aos-delay="100">
              <SectionHeading {...sectionHeading} alignment="start" />
            </div>
          </div>
          <div className="flex-none lg:self-end">
            <Button asChild>
              <CustomLink
                href={ctaButton.href}
                openNewTab={ctaButton.openNewTab}
              >
                <span className="relative z-1">{ctaButton.label} </span>
              </CustomLink>
            </Button>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center py-10" data-aos="fade-up">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10" data-aos="fade-up">
            <p className="text-red-500">{error}</p>
          </div>
        ) : blogs && blogs.length > 0 ? (
          <div className="-mx-4 flex flex-wrap gap-y-30px">
            {blogs.map((blog, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
              >
                <BlogCard {...blog} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10" data-aos="fade-up">
            <p>No blog posts available.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
