import { apiClient } from './apiClient';
import { API_CONFIG } from './apiConfig';
import type {
  ApiResponse,
  AuthResponse,
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  User,
} from './types';

/**
 * Authentication Service
 * Uses global API configuration for endpoints
 */
class AuthService {
  /**
   * Login user
   */
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_CONFIG.ENDPOINTS.AUTH.LOGIN,
      credentials
    );

    if (response.success && response.data) {
      // Store token in localStorage
      apiClient.setToken(response.data.token);
      return response.data;
    }

    throw new Error(response.message || 'Login failed');
  }

  /**
   * Register new user
   */
  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      API_CONFIG.ENDPOINTS.AUTH.REGISTER,
      userData
    );

    if (response.success && response.data) {
      // Store token in localStorage
      apiClient.setToken(response.data.token);
      return response.data;
    }

    throw new Error(response.message || 'Registration failed');
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post<ApiResponse>(API_CONFIG.ENDPOINTS.AUTH.LOGOUT);
    } finally {
      // Always remove token even if API call fails
      apiClient.clearToken();
    }
  }

  /**
   * Request password reset
   */
  async forgotPassword(data: ForgotPasswordRequest): Promise<string> {
    const response = await apiClient.post<ApiResponse>(
      API_CONFIG.ENDPOINTS.AUTH.FORGOT_PASSWORD,
      data
    );

    if (response.success) {
      return response.message;
    }

    throw new Error(response.message || 'Failed to send reset email');
  }

  /**
   * Reset password with token
   */
  async resetPassword(data: ResetPasswordRequest): Promise<string> {
    const response = await apiClient.post<ApiResponse>(
      API_CONFIG.ENDPOINTS.AUTH.RESET_PASSWORD,
      data
    );

    if (response.success) {
      return response.message;
    }

    throw new Error(response.message || 'Failed to reset password');
  }

  /**
   * Get current user
   */
  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<ApiResponse<{ user: User }>>(
      API_CONFIG.ENDPOINTS.AUTH.ME
    );

    if (response.success && response.data) {
      return response.data.user;
    }

    throw new Error(response.message || 'Failed to get user data');
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem(API_CONFIG.TOKEN_KEY);
    }
    return false;
  }

  /**
   * Get stored token
   */
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(API_CONFIG.TOKEN_KEY);
    }
    return null;
  }
}

export const authService = new AuthService();
