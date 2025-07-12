import { ImageProps } from '@/src/common-types';

export interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: {
    name: string;
    image: Omit<ImageProps, 'width' | 'height'>;
  };
  category: string;
  tags: string[];
  image: Omit<ImageProps, 'width' | 'height'>;
  comment_count?: number; // API uses snake_case
  commentCount?: number; // Frontend uses camelCase
}

// Pagination response interface for blog posts
export interface PaginatedBlogPosts {
  items: BlogPost[];
  total: number;
  page: number;
  size: number;
  pages: number;
  has_next: boolean;
  has_prev: boolean;
  next_page: number | null;
  prev_page: number | null;
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    // Fetch from API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/slug/${slug}`, {
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const post = await response.json();
    debugger;
    // Transform API response to match frontend format
    // Ensure image URLs are properly formatted with API base URL
    const transformedPost: BlogPost = {
      ...post,
      authorName: post.author?.name || post.author_name,
      commentCount: post.comment_count,
      // Handle main image URL
      image: post.image ? {
        src: `${apiUrl}${post.image.src}`,
        alt: post.image.alt || post.title
      } : undefined,
      // Handle author image URL if present
      author: post.author ? {
        name: post.author.name,
        image: post.author.image ? {
          src: `${apiUrl}${post.author.image.src}`,
          alt: post.author.image.alt || post.author.name
        } : undefined
      } : undefined
    };
    
    return transformedPost;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return undefined;
  }
};

export const getAllBlogPosts = async (page: number = 1, size: number = 10): Promise<BlogPost[]> => {
  try {
    // Fetch from API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/?page=${page}&size=${size}`, {
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data: PaginatedBlogPosts = await response.json();
    
    // Transform API response items to match frontend format
    const transformedData = data.items.map((post: any) => ({
      ...post,
      authorName: post.author?.name || post.author_name,
      commentCount: post.comment_count,
      // Handle main image URL
      image: post.image ? {
        src: `${apiUrl}${post.image.src}`,
        alt: post.image.alt || post.title
      } : undefined,
      // Handle author image URL if present
      author: post.author ? {
        name: post.author.name,
        image: post.author.image ? {
          src: `${apiUrl}${post.author.image.src}`,
          alt: post.author.image.alt || post.author.name
        } : undefined
      } : undefined
    }));
    
    return transformedData;
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
};

// Function to create a blog post via API
export const createBlogPost = async (formData: FormData): Promise<BlogPost | null> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey
      },
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform API response to match frontend model
    const transformedData = {
      ...data,
      authorName: data.author?.name || data.author_name,
      commentCount: data.comment_count
    };
    
    return transformedData;
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
};

// Function to update a blog post via API
export const updateBlogPost = async (slug: string, formData: FormData): Promise<BlogPost | null> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/slug/${slug}`, {
      method: 'PUT',
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey
      },
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform API response to match frontend model
    const transformedData = {
      ...data,
      authorName: data.author?.name || data.author_name,
      commentCount: data.comment_count
    };
    
    return transformedData;
  } catch (error) {
    console.error(`Error updating blog post with slug ${slug}:`, error);
    return null;
  }
};

// Function to delete a blog post via API
export const deleteBlogPost = async (id: string | number): Promise<boolean> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey
      }
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return true;
  } catch (error) {
    console.error(`Error deleting blog post with id ${id}:`, error);
    return false;
  }
};
