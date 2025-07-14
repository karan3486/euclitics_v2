'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CustomLink } from '@/src/components/custom-link';
import { getAllBlogTitles } from '@/data/blog-section/posts-title';

interface RecentBlogProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  date: string;
  slug: string;
}

export function RecentBlogs() {
  const [blogs, setBlogs] = useState<RecentBlogProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        setLoading(true);
        const response = await getAllBlogTitles(1, 2); // Fetch 2 most recent blog posts
        
        // Get API URL for prefixing image paths
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
        
        // Transform the API response to match the RecentBlogProps interface
        const transformedBlogs: RecentBlogProps[] = response.items.map((blog) => ({
          slug: `/blog/${blog.slug}`,
          image: {
            // Prefix image URL with API URL if it's a relative path
            src: `${apiUrl}${blog.image.src}`,
            alt: blog.image.alt
          },
          title: blog.title,
          // Format current date since the API might not provide a date field
          date: new Date().toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }).toLowerCase()
        }));
        debugger;
        setBlogs(transformedBlogs);
        setError(null);
      } catch (err) {
        console.error('Error fetching recent blog posts:', err);
        setError('Failed to load recent blog posts');
        // Use fallback data if needed
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecentBlogs();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-16 w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-16 w-full animate-pulse bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    );
  }

  if (error || blogs.length === 0) {
    return (
      <div className="text-sm text-gray-500 dark:text-gray-400">
        No recent blog posts available.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {blogs.map((blog, index) => (
        <div key={index} className="flex gap-4">
          <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded">
            <Image
              src={blog.image.src}
              alt={blog.image.alt}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <CustomLink
              href={blog.slug}
              className="line-clamp-2 text-sm font-medium text-accent-900 transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {blog.title}
            </CustomLink>
            {/* <span className="mt-1 text-xs text-accent-700 dark:text-accent-300">
              {blog.date}
            </span> */}
          </div>
        </div>
      ))}
    </div>
  );
}
