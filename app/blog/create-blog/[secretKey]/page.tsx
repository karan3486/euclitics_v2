'use client';

// This is a client component that uses client-side localStorage for demo purposes
// In a real application, you would use server actions or API routes

import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v2';
import { Container } from '@/src/components/container';
import { Button } from '@/src/components/button';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { validateSecretKey, generateSlugFromTitle, checkSlugExists } from '@/src/utils/blog-utils';
import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { BlogPost } from '@/data/blog-section/posts';

export default function CreateBlogPage() {
  const params = useParams();
  const router = useRouter();
  const secretKey = params?.secretKey as string;
  const [isValidKey, setIsValidKey] = useState<boolean | null>(null);
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
    date: new Date().toISOString().split('T')[0],
    authorName: 'Admin',
    imageSrc: '',
    imageAlt: '',
    slug: ''
  });

  // File input reference
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Selected file state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Slug validation state
  const [slugError, setSlugError] = useState('');
  const [isCheckingSlug, setIsCheckingSlug] = useState(false);

  // Validate the secret key on component mount
  useEffect(() => {
    console.log('Secret key from URL:', secretKey);
    const isValid = validateSecretKey(secretKey);
    console.log('Is key valid:', isValid);
    setIsValidKey(isValid);
    
    if (!isValid) {
      // Redirect after a short delay to prevent immediate redirect
      setTimeout(() => {
        router.push('/blog');
      }, 2000);
    }
  }, [secretKey, router]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Check slug uniqueness when slug field changes
    if (name === 'slug' && value) {
      validateSlug(value);
    }
    
    // Auto-generate image alt if title changes
    if (name === 'title') {
      setFormData(prev => ({ ...prev, imageAlt: value }));
    }
  };
  
  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create a preview URL for the image
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, imageSrc: imageUrl }));
    }
  };
  
  // Validate slug uniqueness
  const validateSlug = async (slug: string) => {
    if (!slug) return;
    
    setIsCheckingSlug(true);
    setSlugError('');
    
    try {
      // Format slug properly
      const formattedSlug = slug.startsWith('/blog/') ? slug : `/blog/${slug}`;
      
      // Check if slug exists
      const exists = await checkSlugExists(formattedSlug);
      
      if (exists) {
        setSlugError('This slug already exists. Please choose a different one.');
      }
    } catch (error) {
      console.error('Error checking slug:', error);
    } finally {
      setIsCheckingSlug(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Use custom slug if provided, otherwise generate from title
      const slug = formData.slug ? (formData.slug.startsWith('/blog/') ? formData.slug : `/blog/${formData.slug}`) : generateSlugFromTitle(formData.title);
      
      // Check if slug exists
      const slugExists = await checkSlugExists(slug);
      if (slugExists) {
        setErrorMessage('This slug already exists. Please choose a different one.');
        setIsSubmitting(false);
        return;
      }
      
      if (!selectedFile) {
        setErrorMessage('Please select an image file.');
        setIsSubmitting(false);
        return;
      }
      
      // Create FormData for API request
      const apiFormData = new FormData();
      
      // Add required fields
      apiFormData.append('title', formData.title);
      apiFormData.append('description', formData.description);
      apiFormData.append('content', formData.content);
      apiFormData.append('category', formData.category);
      apiFormData.append('date', formData.date);
      
      // Add slug without /blog/ prefix
      apiFormData.append('slug', slug.replace('/blog/', ''));
      
      // Add image file and alt text
      apiFormData.append('image_file', selectedFile);
      apiFormData.append('image_alt', formData.imageAlt || formData.title);
      
      // Add tags as comma-separated string
      apiFormData.append('tags', formData.tags);
      
      // Add comment count (default to 0 for new posts)
      apiFormData.append('comment_count', '0');
      
      // Author fields are now optional and we're not including them
      // as per the updated API requirements
      
      // Get API URL and key from environment variables
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
      const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
      
      // Make the API request
      const response = await fetch(`${apiUrl}/api/v1/blog/posts/`, {
        method: 'POST',
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
        setSuccessMessage('Blog post created successfully!');
        // Reset form
        setFormData({
          title: '',
          description: '',
          content: '',
          category: '',
          tags: '',
          date: new Date().toISOString().split('T')[0],
          authorName: '',
          imageSrc: '',
          imageAlt: '',
          slug: ''
        });
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setSelectedFile(null);
        
        // Redirect to the new blog post after a delay
        setTimeout(() => {
          router.push(`/blog/${result.slug}`);
        }, 2000);
      } else {
        setErrorMessage('Failed to create blog post. Please try again.');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
      setErrorMessage('An error occurred while creating the blog post.');
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

  // If still validating or key is valid, show the form
  return (
    <>
      <MainHeader version="2" />
      <section className="section-padding-primary">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-8 text-center text-3xl font-bold">Create New Blog Post</h1>
            
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
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                  placeholder="Brief description of your blog post"
                />
              </div>
              
              <div>
                <label htmlFor="slug" className="mb-2 block font-medium">
                  Blog Slug ID *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-md border ${slugError ? 'border-red-500' : 'border-gray-300'} p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700`}
                    placeholder="unique-blog-slug"
                  />
                  {isCheckingSlug && (
                    <div className="absolute right-3 top-3">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                    </div>
                  )}
                </div>
                {slugError && (
                  <p className="mt-1 text-sm text-red-500">{slugError}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">This will be used in the URL: /blog/your-slug</p>
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
                  placeholder="<p>Your HTML content here...</p>"
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
                    placeholder="Tag1, Tag2, Tag3"
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
                  <label htmlFor="image" className="mb-2 block font-medium">
                    Image Source *
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full rounded-md border border-gray-300 p-3 focus:border-primary focus:outline-none dark:border-gray-700 dark:bg-accent-700"
                  />
                  {formData.imageSrc && (
                    <div className="mt-2">
                      <Image 
                        src={formData.imageSrc} 
                        alt="Preview" 
                        width={80}
                        height={80}
                        className="h-20 w-auto object-cover rounded-md" 
                        unoptimized={true}
                      />
                    </div>
                  )}
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
              
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 text-lg"
                >
                  {isSubmitting ? 'Creating...' : 'Create Blog Post'}
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
