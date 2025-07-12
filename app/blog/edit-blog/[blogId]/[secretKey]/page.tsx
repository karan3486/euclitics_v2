'use client';

// This is a client component that uses client-side localStorage for demo purposes
// In a real application, you would use server actions or API routes

import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v2';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { validateSecretKey, updateBlogPost, getBlogPostBySlug } from '@/src/utils/blog-utils';
import { notFound } from 'next/navigation';
import { BlogPost } from '@/data/blog-section/posts';

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();
  const blogSlug = params?.blogId as string; // Using blogId parameter as slug
  const secretKey = params?.secretKey as string;
  
  const [isValidKey, setIsValidKey] = useState<boolean | null>(null);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: '',
    tags: '',
    date: '',
    imageSrc: '',
    imageAlt: '',
  });
  
  // File upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Clean up object URL when component unmounts or when preview URL changes
  useEffect(() => {
    // Return cleanup function
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);
  
  // Validate the secret key and fetch blog post on component mount
  useEffect(() => {
    const validateAndFetch = async () => {
      // Validate secret key
      console.log('Secret key from URL:', secretKey);
      console.log('Blog slug from URL:', blogSlug);
      const isValid = validateSecretKey(secretKey);
      console.log('Is key valid:', isValid);
      setIsValidKey(isValid);
      
      if (!isValid) {
        // Redirect after a short delay to prevent immediate redirect
        setTimeout(() => {
          router.push('/blog');
        }, 2000);
        return;
      }
      
      // Fetch blog post
      try {
        const post = await getBlogPostBySlug(blogSlug);
        
        if (!post) {
          notFound();
          return;
        }
        
        setBlogPost(post);
        
        // Initialize form data
        setFormData({
          title: post.title,
          description: post.description,
          content: post.content,
          category: post.category,
          tags: post.tags.join(', '),
          date: new Date(post.date).toISOString().split('T')[0],
          imageSrc: post.image.src,
          imageAlt: post.image.alt,
        });
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setErrorMessage('Failed to fetch blog post data.');
      } finally {
        setIsLoading(false);
      }
    };
    
    validateAndFetch();
  }, [blogSlug, secretKey, router]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      if (!blogPost) {
        throw new Error('Blog post not found');
      }
      
      // Create FormData for API request
      const apiFormData = new FormData();
      
      // Add required fields
      apiFormData.append('title', formData.title);
      apiFormData.append('description', formData.description);
      apiFormData.append('content', formData.content);
      apiFormData.append('category', formData.category);
      apiFormData.append('date', formData.date);
      
      // Add image details
      apiFormData.append('image_alt', formData.imageAlt || formData.title);
      
      // Add image file if selected
      if (selectedFile) {
        apiFormData.append('image_file', selectedFile);
      }
      
      // Add tags as comma-separated string
      apiFormData.append('tags', formData.tags);
      
      // Add comment count if available
      if (blogPost.commentCount !== undefined) {
        apiFormData.append('comment_count', blogPost.commentCount.toString());
      }
      
      // Author fields are now optional and we're not including them
      // as per the updated API requirements
      
      // Get API URL and key from environment variables
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
      
      // Extract slug without /blog/ prefix
      const slug = blogPost.slug.replace('/blog/', '');
      
      // Make the API request
      const response = await fetch(`${apiUrl}/api/v1/blog/posts/slug/${slug}`, {
        method: 'PUT',
        headers: {
          'X-API-Key': apiKey
          // Note: Don't set Content-Type header when using FormData
        },
        body: apiFormData
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result) {
        setSuccessMessage('Blog post updated successfully!');
        
        // Redirect to the blog post after a delay
        setTimeout(() => {
          router.push(`/blog/${result.slug}`);
        }, 2000);
      } else {
        setErrorMessage('Failed to update blog post. Please try again.');
      }
    } catch (error) {
      console.error('Error updating blog post:', error);
      setErrorMessage('An error occurred while updating the blog post.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // If key is invalid, show access denied
  if (isValidKey === false) {
    return (
      <>
        <MainHeader version="2" />
        <section className="section-padding-primary">
          <Container>
            <div className="text-center">
              <h1 className="mb-6 text-3xl font-bold text-red-600">Access Denied</h1>
              <p>Invalid secret key. Redirecting to blog page...</p>
            </div>
          </Container>
        </section>
        <Footer />
      </>
    );
  }

  // If loading, show loading state
  if (isLoading) {
    return (
      <>
        <MainHeader version="2" />
        <section className="section-padding-primary">
          <Container>
            <div className="text-center">
              <h1 className="mb-6 text-3xl font-bold">Edit Blog Post: {blogSlug}</h1>
              <p>Please wait while we fetch the blog post data.</p>
            </div>
          </Container>
        </section>
        <Footer />
      </>
    );
  }

  // If blog post not found, show not found
  if (!blogPost) {
    return (
      <>
        <MainHeader version="2" />
        <section className="section-padding-primary">
          <Container>
            <div className="text-center">
              <h1 className="mb-6 text-3xl font-bold text-red-600">Blog Post Not Found</h1>
              <p>The requested blog post could not be found.</p>
              <Button asChild className="mt-6">
                <a href="/blog">Back to Blog</a>
              </Button>
            </div>
          </Container>
        </section>
        <Footer />
      </>
    );
  }

  // Show the edit form
  return (
    <>
      <MainHeader version="2" />
      <section className="section-padding-primary">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-center text-3xl font-bold">Edit Blog Post</h1>
            
            {successMessage && (
              <div className="mb-6 rounded-md bg-green-100 p-4 text-green-700">
                {successMessage}
              </div>
            )}
            
            {errorMessage && (
              <div className="mb-6 rounded-md bg-red-100 p-4 text-red-700">
                {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="mb-2 block font-medium">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="mb-2 block font-medium">
                  description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="content" className="block font-medium">
                    Content (HTML) *
                  </label>
                  <Button
                    type="button"
                    onClick={() => {
                      // Create a new window with the HTML content
                      const previewWindow = window.open('', '_blank');
                      if (previewWindow) {
                        previewWindow.document.write(`
                          <!DOCTYPE html>
                          <html>
                            <head>
                              <title>Blog Content Preview</title>
                              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                              <style>
                                body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 800px; margin: 0 auto; }
                                h1, h2, h3, h4, h5, h6 { color: #333; margin-top: 1.5em; }
                                img { max-width: 100%; height: auto; }
                                blockquote { border-left: 4px solid #ddd; padding-left: 1em; font-style: italic; }
                                pre { background: #f5f5f5; padding: 1em; overflow: auto; }
                                code { background: #f5f5f5; padding: 2px 4px; }
                              </style>
                            </head>
                            <body>
                              <h1>${formData.title}</h1>
                              <div>${formData.content}</div>
                            </body>
                          </html>
                        `);
                        previewWindow.document.close();
                      }
                    }}
                    className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                  >
                    Preview
                  </Button>
                </div>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={10}
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="category" className="mb-2 block font-medium">
                    Category *
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                  />
                </div>
                
                <div>
                  <label htmlFor="tags" className="mb-2 block font-medium">
                    Tags (comma separated) *
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="date" className="mb-2 block font-medium">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="imageFile" className="mb-2 block font-medium">
                    Blog Image *
                  </label>
                  <div className="flex flex-col gap-2">
                   
                    <input
                      type="file"
                      id="imageFile"
                      name="imageFile"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setSelectedFile(file);
                        
                        // Create preview URL for the selected image
                        if (file) {
                          const objectUrl = URL.createObjectURL(file);
                          setPreviewUrl(objectUrl);
                        } else {
                          setPreviewUrl(null);
                        }
                      }}
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                    />
                    <p className="text-xs text-gray-500">
                      {selectedFile ? `Selected: ${selectedFile.name}` : 'Select a new image file to update the current image'}
                    </p>
                    
                    <div className="flex flex-row gap-4 mt-2">
                      {/* Current image */}
                      {formData.imageSrc && (
                        <div className="mb-2">
                          <p className="mb-1 text-sm font-medium">Current image:</p>
                          <img 
                            src={formData.imageSrc} 
                            alt={formData.imageAlt || 'Current blog image'} 
                            className="h-32 w-auto object-cover rounded-md border border-gray-300" 
                          />
                        </div>
                      )}
                      
                      {/* New image preview */}
                      {previewUrl && (
                        <div className="mb-2">
                          <p className="mb-1 text-sm font-medium">New image preview:</p>
                          <img 
                            src={previewUrl} 
                            alt="New image preview" 
                            className="h-32 w-auto object-cover rounded-md border border-primary" 
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="imageAlt" className="mb-2 block font-medium">
                    Image Alt Text
                  </label>
                  <input
                    type="text"
                    id="imageAlt"
                    name="imageAlt"
                    value={formData.imageAlt}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                  />
                </div>
              </div>
              
              <div className="flex justify-center gap-4 pt-4">
                <Button
                  type="button"
                  onClick={() => router.back()}
                  className="bg-gray-500 px-6 py-3 text-lg hover:bg-gray-600"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-lg"
                >
                  {isSubmitting ? 'Updating...' : 'Update Blog Post'}
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
