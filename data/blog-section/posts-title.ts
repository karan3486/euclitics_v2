// Blog post titles and metadata for listing and editing
export interface BlogTitle {
  id: string | number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
  author_name?: string; // API uses snake_case
  authorName?: string; // Frontend uses camelCase
  comment_count?: number | string | null; // API uses snake_case
  commentCount?: string; // Frontend uses camelCase
}

// Pagination response interface for blog titles
export interface PaginatedBlogTitles {
  items: BlogTitle[];
  total: number;
  page: number;
  size: number;
  pages: number;
  has_next: boolean;
  has_prev: boolean;
  next_page: number | null;
  prev_page: number | null;
}

// Function to get all blog titles with pagination data
export const getAllBlogTitles = async (page: number = 1, size: number = 5): Promise<PaginatedBlogTitles> => {
  try {
    // Fetch from API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    const response = await fetch(`${apiUrl}/api/v1/blog/titles/?page=${page}&size=${size}`, {
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey
      }
    });
    debugger;
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data: PaginatedBlogTitles = await response.json();
    
    // Transform API response items to match frontend format
    const transformedItems = data.items.map((title: any) => ({
      id: title.id,
      slug: title.slug,
      title: title.title,
      description: title.description,
      category: title.category,
      image: title.image,
      authorName: title.author_name || title.authorName,
      commentCount: title.comment_count?.toString() || title.commentCount
    }));
    
    // Return the full pagination data with transformed items
    return {
      ...data,
      items: transformedItems
    };
  } catch (error) {
    console.error('Error fetching blog titles:', error);
    
    // If API fails, return empty pagination data
    return {
      items: [],
      total: 0,
      page: page,
      size: size,
      pages: 0,
      has_next: false,
      has_prev: false,
      next_page: null,
      prev_page: null
    };
  }
}

// Function to get a blog title by ID
export async function getBlogTitleById(id: string): Promise<BlogTitle | undefined> {
  try {
    // Fetch all titles from API and find by ID
    // Note: API doesn't have a direct endpoint for getting by ID
    // Use a larger page size to try to get all titles in one request
    const response = await getAllBlogTitles(1, 100);
    return response.items.find((blog: BlogTitle) => blog.id.toString() === id);
  } catch (error) {
    console.error('Error fetching blog title by ID:', error);
    return undefined;
  }
}

// Function to get a blog title by slug
export async function getBlogTitleBySlug(slug: string): Promise<BlogTitle | undefined> {
  try {
    // Fetch from API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
    
    // Try to get the blog post directly by slug from the posts endpoint
    // since it contains all the title information as well
    const response = await fetch(`${apiUrl}/api/v1/blog/posts/slug/${slug}`, {
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey
      }
    });
    
    if (!response.ok) {
      // If not found via direct slug endpoint, fall back to searching all titles
      const paginatedResponse = await getAllBlogTitles(1, 100);
      return paginatedResponse.items.find((blog: BlogTitle) => blog.slug === slug);
    }
    
    const data = await response.json();
    
    // Transform the blog post data into a blog title format
    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      description: data.description,
      category: data.category,
      image: data.image,
      authorName: data.author?.name || data.author_name,
      commentCount: data.comment_count?.toString()
    };
  } catch (error) {
    console.error('Error fetching blog title by slug:', error);
    
    // Fall back to searching all titles if the direct approach fails
    try {
      const paginatedResponse = await getAllBlogTitles(1, 100);
      return paginatedResponse.items.find((blog: BlogTitle) => blog.slug === slug);
    } catch (fallbackError) {
      console.error('Fallback error fetching blog title by slug:', fallbackError);
      return undefined;
    }
  }
}

// Note: Client-side storage functions have been removed as all operations now go through the API
// For updating or adding blog titles, use the corresponding functions in posts.ts that interact with the API
// These functions will handle both the blog post and blog title updates through the backend
