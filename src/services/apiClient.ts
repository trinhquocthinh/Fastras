import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { API_CONFIG } from './apiConfig';

/**
 * Enhanced API Client with interceptors and global configuration
 * Easily switch between mock and real API by changing API_CONFIG.BASE_URL
 */
class ApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: unknown) => void;
  }> = [];

  constructor() {
    this.instance = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: API_CONFIG.HEADERS,
    });

    this.setupRequestInterceptor();
    this.setupResponseInterceptor();
  }

  /**
   * Request Interceptor
   * - Adds authentication token
   * - Adds custom headers
   * - Logs requests in development
   */
  private setupRequestInterceptor(): void {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Add authentication token
        const token = this.getToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Add timestamp for request tracking
        if (config.headers) {
          config.headers['X-Request-Time'] = new Date().toISOString();
        }

        // Log requests in development
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('🚀 API Request:', {
            method: config.method?.toUpperCase(),
            url: config.url,
            baseURL: config.baseURL,
            headers: config.headers,
            data: config.data,
          });
        }

        return config;
      },
      (error: AxiosError) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Response Interceptor
   * - Handles successful responses
   * - Handles errors globally
   * - Token refresh logic
   * - Auto-redirect on 401
   */
  private setupResponseInterceptor(): void {
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Log responses in development
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('✅ API Response:', {
            status: response.status,
            url: response.config.url,
            data: response.data,
          });
        }
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
          _retry?: boolean;
        };

        // Log errors in development
        if (process.env.NODE_ENV === 'development') {
          console.error('❌ API Error:', {
            status: error.response?.status,
            url: error.config?.url,
            message: error.message,
            data: error.response?.data,
          });
        }

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            // Queue the request while token is being refreshed
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject });
            })
              .then(() => this.instance(originalRequest))
              .catch(err => Promise.reject(err));
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            // Attempt to refresh token
            const newToken = await this.refreshToken();

            if (newToken) {
              this.setToken(newToken);

              // Retry all queued requests
              this.failedQueue.forEach(promise => promise.resolve());
              this.failedQueue = [];

              // Retry original request
              return this.instance(originalRequest);
            }
          } catch (refreshError) {
            // Token refresh failed - logout user
            this.failedQueue.forEach(promise => promise.reject(refreshError));
            this.failedQueue = [];
            this.handleLogout();
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        // Handle other error status codes
        this.handleErrorStatus(error);

        return Promise.reject(error);
      }
    );
  }

  /**
   * Handle different error status codes
   */
  private handleErrorStatus(error: AxiosError): void {
    const status = error.response?.status;

    switch (status) {
      case 400:
        console.error('Bad Request - Invalid data sent to server');
        break;
      case 403:
        console.error('Forbidden - You do not have permission');
        break;
      case 404:
        console.error('Not Found - Resource does not exist');
        break;
      case 500:
        console.error('Server Error - Please try again later');
        break;
      case 503:
        console.error('Service Unavailable - Server is down');
        break;
      default:
        if (status && status >= 500) {
          console.error('Server Error - Please contact support');
        }
    }
  }

  /**
   * Refresh authentication token
   * Note: Implement when real API is available
   */
  // eslint-disable-next-line sonarjs/no-invariant-returns
  private async refreshToken(): Promise<string | null> {
    // Implement token refresh logic here when using real API
    // Example implementation (uncomment and modify when ready):
    // try {
    //   const response = await axios.post(
    //     `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AUTH.REFRESH_TOKEN}`,
    //     {},
    //     { headers: { Authorization: `Bearer ${this.getToken()}` } }
    //   );
    //   return response.data.data.token;
    // } catch {
    //   return null;
    // }
    return null;
  }

  /**
   * Handle logout
   */
  private handleLogout(): void {
    this.removeToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  }

  /**
   * Token Management
   */
  private getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(API_CONFIG.TOKEN_KEY);
    }
    return null;
  }

  private removeToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(API_CONFIG.TOKEN_KEY);
    }
  }

  public setToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(API_CONFIG.TOKEN_KEY, token);
    }
  }

  public clearToken(): void {
    this.removeToken();
  }

  /**
   * HTTP Methods - Global API methods
   */

  /**
   * GET request
   * @param url - Endpoint URL
   * @param config - Axios request configuration
   * @returns Response data
   */
  public async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  /**
   * POST request
   * @param url - Endpoint URL
   * @param data - Request body data
   * @param config - Axios request configuration
   * @returns Response data
   */
  public async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }

  /**
   * PUT request
   * @param url - Endpoint URL
   * @param data - Request body data
   * @param config - Axios request configuration
   * @returns Response data
   */
  public async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.put<T>(url, data, config);
    return response.data;
  }

  /**
   * PATCH request
   * @param url - Endpoint URL
   * @param data - Request body data
   * @param config - Axios request configuration
   * @returns Response data
   */
  public async patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.patch<T>(url, data, config);
    return response.data;
  }

  /**
   * DELETE request
   * @param url - Endpoint URL
   * @param config - Axios request configuration
   * @returns Response data
   */
  public async delete<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.delete<T>(url, config);
    return response.data;
  }

  /**
   * Upload file(s)
   * @param url - Endpoint URL
   * @param formData - FormData with file(s)
   * @param config - Axios request configuration
   * @returns Response data
   */
  public async upload<T = unknown>(
    url: string,
    formData: FormData,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.instance.post<T>(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  /**
   * Download file
   * @param url - Endpoint URL
   * @param config - Axios request configuration
   * @returns Blob data
   */
  public async download(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Blob> {
    const response = await this.instance.get<Blob>(url, {
      ...config,
      responseType: 'blob',
    });
    return response.data;
  }

  /**
   * Get Axios instance for custom use
   */
  public getInstance(): AxiosInstance {
    return this.instance;
  }

  /**
   * Update base URL dynamically (useful for switching APIs)
   */
  public setBaseURL(baseURL: string): void {
    this.instance.defaults.baseURL = baseURL;
  }

  /**
   * Add custom header
   */
  public setHeader(key: string, value: string): void {
    this.instance.defaults.headers.common[key] = value;
  }

  /**
   * Remove custom header
   */
  public removeHeader(key: string): void {
    delete this.instance.defaults.headers.common[key];
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for testing or multiple instances
export { ApiClient };
