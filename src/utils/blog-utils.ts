import { BlogPost, getAllBlogPosts as fetchAllBlogPosts, getBlogPostBySlug as fetchBlogPostBySlug } from '@/data/blog-section/posts';
import { BlogTitle, getAllBlogTitles } from '@/data/blog-section/posts-title';

// Prefix unused functions with underscore to satisfy linting rules
const _getBlogTitleBySlug = () => {}; // This is a placeholder to fix the linting error

// These utility functions now use the API functions from posts.ts and posts-title.ts

// Function to get all blog posts - wrapper around the API function
export async function getAllBlogPosts(page: number = 1, size: number = 10): Promise<BlogPost[]> {
  return await fetchAllBlogPosts(page, size);
}

// Function to get a blog post by ID
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  // Get all posts and find by ID
  // Note: API doesn't have a direct endpoint for getting by ID
  const posts = await fetchAllBlogPosts(1, 100);
  return posts.find(post => post.id.toString() === id) || null;
}

// Function to get a blog post by slug - wrapper around the API function
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post = await fetchBlogPostBySlug(slug);
    return post || null;
  } catch (error) {
    console.error(`Error in getBlogPostBySlug utility function:`, error);
    return null;
  }
}

// Function to create a new blog post using the API
export async function createBlogPost(blogPost: Omit<BlogPost, 'id'>): Promise<BlogPost | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    // Create FormData for the API request
    const formData = new FormData();
    formData.append('title', blogPost.title);
    formData.append('slug', blogPost.slug.replace('/blog/', ''));
    formData.append('description', blogPost.description);
    formData.append('content', blogPost.content);
    formData.append('category', blogPost.category);
    formData.append('date', blogPost.date);
    formData.append('author_name', blogPost.author.name);
    
    // Add tags if available
    if (blogPost.tags && blogPost.tags.length > 0) {
      blogPost.tags.forEach(tag => {
        formData.append('tags', tag);
      });
    }
    
    // Handle image upload if it's a File object
    if (blogPost.image && typeof blogPost.image.src !== 'string') {
      // Use proper type for File/Blob objects
      formData.append('image', blogPost.image.src as File | Blob);
      formData.append('image_alt', blogPost.image.alt || blogPost.title);
    }
    
    // Make the API request
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/`, {
      method: 'POST',
      headers: {
        'X-API-Key': apiKey
        // Note: Don't set Content-Type header when using FormData
      },
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform API response to match frontend model
    const newPost: BlogPost = {
      ...data,
      authorName: data.author?.name || data.author_name,
      commentCount: data.comment_count,
      // Format image URLs
      image: data.image ? {
        src: `${apiUrl}${data.image.src}`,
        alt: data.image.alt || data.title
      } : undefined,
      author: data.author ? {
        name: data.author.name,
        image: data.author.image ? {
          src: `${apiUrl}${data.author.image.src}`,
          alt: data.author.image.alt || data.author.name
        } : undefined
      } : undefined
    };
    
    return newPost;
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
}

// Function to update an existing blog post using the API
export async function updateBlogPost(id: string, updatedData: Partial<BlogPost>): Promise<BlogPost | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    // First, get the current post to merge with updates
    const currentPost = await getBlogPostById(id);
    if (!currentPost) {
      throw new Error(`Blog post with ID ${id} not found`);
    }
    
    // Create FormData for the API request
    const formData = new FormData();
    
    // Add all fields that might be updated
    if (updatedData.title) formData.append('title', updatedData.title);
    if (updatedData.description) formData.append('description', updatedData.description);
    if (updatedData.content) formData.append('content', updatedData.content);
    if (updatedData.category) formData.append('category', updatedData.category);
    if (updatedData.date) formData.append('date', updatedData.date);
    
    // Handle slug - remove /blog/ prefix if present
    if (updatedData.slug) {
      formData.append('slug', updatedData.slug.replace('/blog/', ''));
    }
    
    // Handle tags if available
    if (updatedData.tags && updatedData.tags.length > 0) {
      updatedData.tags.forEach(tag => {
        formData.append('tags', tag);
      });
    }
    
    // Handle image upload if it's a Blob/File object
    if (updatedData.image && typeof updatedData.image.src !== 'string') {
      // Use proper type for File/Blob objects
      formData.append('image', updatedData.image.src as File | Blob);
      formData.append('image_alt', updatedData.image.alt || updatedData.title || currentPost.title);
    }
    
    // Make the API request
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/${id}`, {
      method: 'PATCH',  // or PUT depending on API design
      headers: {
        'X-API-Key': apiKey
        // Note: Don't set Content-Type header when using FormData
      },
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform API response to match frontend model
    const updatedPost: BlogPost = {
      ...data,
      authorName: data.author?.name || data.author_name,
      commentCount: data.comment_count,
      // Format image URLs
      image: data.image ? {
        src: `${apiUrl}${data.image.src}`,
        alt: data.image.alt || data.title
      } : undefined,
      author: data.author ? {
        name: data.author.name,
        image: data.author.image ? {
          src: `${apiUrl}${data.author.image.src}`,
          alt: data.author.image.alt || data.author.name
        } : undefined
      } : undefined
    };
    
    return updatedPost;
  } catch (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
}

// Function to generate a slug from a title
export function generateSlugFromTitle(title: string): string {
  return '/blog/' + title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim();
}

// Function to validate the secret key
export function validateSecretKey(providedKey: string): boolean {
  // In client components, we can't access environment variables unless they're prefixed with NEXT_PUBLIC_
  // For demo purposes, we'll use a hardcoded value that matches what's in the .env file
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || '';
  return providedKey === SECRET_KEY;
}

// Function to check if a slug already exists
export async function checkSlugExists(slug: string): Promise<boolean> {
  try {
    // Get all blog titles - use page 1 with large size to get as many as possible
    const paginatedResponse = await getAllBlogTitles(1, 100);
    
    // Check if any blog has the same slug
    const slugWithoutPrefix = slug.replace('/blog/', '');
    
    // Check if the slug exists in the API data
    return paginatedResponse.items.some((blog: BlogTitle) => 
      blog.slug === slugWithoutPrefix || blog.slug === slug
    );
  } catch (error) {
    console.error('Error checking if slug exists:', error);
    return false;
  }
}
