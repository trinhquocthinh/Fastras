/* eslint-disable no-console */
/**
 * API Usage Examples
 * Demonstrates how to use the enhanced API client
 */

import { useState } from 'react';

import { useAuth } from '@/hooks';
import { apiClient, API_CONFIG, authService } from '@/services';
import type { ApiResponse } from '@/services';

// ============================================
// 1. BASIC HTTP METHODS
// ============================================

// GET request
export const getExample = async () => {
  try {
    const data = await apiClient.get<ApiResponse<{ users: User[] }>>(
      API_CONFIG.ENDPOINTS.USER.PROFILE
    );
    console.log('GET Response:', data);
    return data;
  } catch (error) {
    console.error('GET Error:', error);
    throw error;
  }
};

// POST request
export const postExample = async () => {
  try {
    const data = await apiClient.post<ApiResponse<{ id: string }>>(
      '/api/posts',
      {
        title: 'New Post',
        content: 'Post content here',
      }
    );
    console.log('POST Response:', data);
    return data;
  } catch (error) {
    console.error('POST Error:', error);
    throw error;
  }
};

// PUT request
export const putExample = async (id: string) => {
  try {
    const data = await apiClient.put<ApiResponse>(`/api/posts/${id}`, {
      title: 'Updated Post',
      content: 'Updated content',
    });
    console.log('PUT Response:', data);
    return data;
  } catch (error) {
    console.error('PUT Error:', error);
    throw error;
  }
};

// DELETE request
export const deleteExample = async (id: string) => {
  try {
    const data = await apiClient.delete<ApiResponse>(`/api/posts/${id}`);
    console.log('DELETE Response:', data);
    return data;
  } catch (error) {
    console.error('DELETE Error:', error);
    throw error;
  }
};

// ============================================
// 2. FILE OPERATIONS
// ============================================

// Upload file
export const uploadExample = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', 'Profile picture');

    const data = await apiClient.upload<ApiResponse<{ url: string }>>(
      '/api/upload/avatar',
      formData
    );
    console.log('Upload Response:', data);
    return data;
  } catch (error) {
    console.error('Upload Error:', error);
    throw error;
  }
};

// Download file
export const downloadExample = async () => {
  try {
    const blob = await apiClient.download('/api/reports/export.pdf');

    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'report.pdf';
    link.click();

    // Cleanup
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download Error:', error);
    throw error;
  }
};

// ============================================
// 3. AUTHENTICATION EXAMPLES
// ============================================

// Login
export const loginExample = async () => {
  try {
    const { user, token } = await authService.login({
      email: 'admin@fastras.com',
      password: process.env.REACT_APP_DEMO_PASSWORD || '123456',
      remember: true,
    });

    console.log('Logged in user:', user);
    console.log('Token:', token);

    return { user, token };
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

// Register
export const registerExample = async () => {
  try {
    const demoPassword = process.env.REACT_APP_DEMO_PASSWORD || '123456';
    const { user, token } = await authService.register({
      fullName: 'John Doe',
      email: 'john@example.com',
      password: demoPassword,
      confirmPassword: demoPassword,
    });

    console.log('Registered user:', user);
    return { user, token };
  } catch (error) {
    console.error('Register Error:', error);
    throw error;
  }
};

// Get current user
export const getCurrentUserExample = async () => {
  try {
    const user = await authService.getCurrentUser();
    console.log('Current user:', user);
    return user;
  } catch (error) {
    console.error('Get User Error:', error);
    throw error;
  }
};

// Logout
export const logoutExample = async () => {
  try {
    await authService.logout();
    console.log('Logged out successfully');
  } catch (error) {
    console.error('Logout Error:', error);
    throw error;
  }
};

// ============================================
// 4. ADVANCED USAGE
// ============================================

// Custom headers
export const customHeadersExample = async () => {
  try {
    // Add custom header globally
    apiClient.setHeader('X-Custom-Header', 'custom-value');

    const data = await apiClient.get('/api/data');

    // Remove custom header
    apiClient.removeHeader('X-Custom-Header');

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Switch API dynamically
export const switchAPIExample = () => {
  // Switch to staging API
  apiClient.setBaseURL('https://api-staging.fastras.com');

  // Make requests...

  // Switch back to production
  apiClient.setBaseURL(API_CONFIG.REAL_API_URL);
};

// Request with custom config
export const customConfigExample = async () => {
  try {
    const data = await apiClient.get('/api/data', {
      timeout: 5000, // 5 seconds timeout
      headers: {
        'X-Request-ID': 'custom-request-id',
      },
      params: {
        page: 1,
        limit: 10,
        sort: 'createdAt',
      },
    });

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// ============================================
// 5. ERROR HANDLING
// ============================================

export const errorHandlingExample = async () => {
  try {
    const data = await apiClient.get('/api/endpoint');
    return data;
  } catch (error) {
    // Type guard for Axios error
    if (error instanceof Error && 'response' in error) {
      const axiosError = error as {
        response?: { status: number; data: unknown };
      };

      switch (axiosError.response?.status) {
        case 400:
          console.error('Bad Request - Check your data');
          break;
        case 401:
          console.error('Unauthorized - Please login');
          break;
        case 403:
          console.error('Forbidden - No permission');
          break;
        case 404:
          console.error('Not Found - Resource does not exist');
          break;
        case 500:
          console.error('Server Error - Try again later');
          break;
        default:
          console.error('Unknown Error:', axiosError.response?.data);
      }
    } else {
      console.error('Network Error or Unknown Error:', error);
    }

    throw error;
  }
};

// ============================================
// 6. REACT HOOK EXAMPLES
// ============================================

// Using the useAuth hook in a component
export const UseAuthExample = () => {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login({ email, password });
      // User is now logged in and redirected
    } catch (err) {
      // Error is available in the 'error' state
      console.error('Login failed:', err);
      // Re-throw to let the component handle it
      throw err;
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin} disabled={loading}>
        Login
      </button>
    </div>
  );
};

// ============================================
// 7. PAGINATION EXAMPLE
// ============================================

export const paginatedRequestExample = async (page = 1, limit = 10) => {
  try {
    const data = await apiClient.get<
      ApiResponse<{
        items: unknown[];
        total: number;
        page: number;
        limit: number;
      }>
    >('/api/posts', {
      params: { page, limit },
    });

    console.log(
      `Page ${data.data?.page} of ${Math.ceil((data.data?.total || 0) / limit)}`
    );
    return data;
  } catch (error) {
    console.error('Pagination Error:', error);
    throw error;
  }
};

// ============================================
// 8. SEARCH EXAMPLE
// ============================================

export const searchExample = async (query: string) => {
  try {
    const data = await apiClient.get<ApiResponse<{ results: unknown[] }>>(
      '/api/search',
      {
        params: {
          q: query,
          limit: 20,
        },
      }
    );

    return data.data?.results || [];
  } catch (error) {
    console.error('Search Error:', error);
    return [];
  }
};

// ============================================
// 9. BATCH REQUESTS
// ============================================

export const batchRequestsExample = async () => {
  try {
    // Execute multiple requests in parallel
    const [users, posts, comments] = await Promise.all([
      apiClient.get<ApiResponse<{ users: User[] }>>('/api/users'),
      apiClient.get<ApiResponse<{ posts: Post[] }>>('/api/posts'),
      apiClient.get<ApiResponse<{ comments: Comment[] }>>('/api/comments'),
    ]);

    return {
      users: users.data?.users,
      posts: posts.data?.posts,
      comments: comments.data?.comments,
    };
  } catch (error) {
    console.error('Batch Request Error:', error);
    throw error;
  }
};

// ============================================
// TYPE DEFINITIONS
// ============================================

type User = {
  id: string;
  email: string;
  fullName: string;
};

type Post = {
  id: string;
  title: string;
  content: string;
};

type Comment = {
  id: string;
  text: string;
  userId: string;
};
