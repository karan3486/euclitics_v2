'use client';

import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogDetilsSection } from '@/src/sections/blog-details/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/src/utils/blog-utils';
import { useEffect, useState } from 'react';
import { BlogPost } from '@/data/blog-section/posts';

export default function Page() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    if (!slug) {
      notFound();
      return;
    }
    
    // Create an async function inside useEffect to fetch the blog post
    const fetchBlogPost = async () => {
      try {
        const blogPost = await getBlogPostBySlug(slug);
        if (!blogPost) {
          notFound();
          return;
        }
        
        setPost(blogPost);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        notFound();
      }
    };
    
    // Call the async function
    fetchBlogPost();
  }, [slug]);
  
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title={post.title}
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog',
            href: '/blog',
          },
          {
            label: post.title,
          },
        ]}
      />
      <BlogDetilsSection blogPost={post} />
      <Footer />
    </>
  );
}
