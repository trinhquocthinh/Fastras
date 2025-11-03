/**
 * API Configuration
 * Centralized configuration for API endpoints and settings
 */

export const API_CONFIG = {
  // Base URLs - Switch between mock and real API
  MOCK_API_URL: '/api',
  REAL_API_URL:
    process.env.NEXT_PUBLIC_REAL_API_URL || 'https://api.fastras.com',

  // Current API URL - Change this to switch between mock and real
  get BASE_URL() {
    return process.env.NEXT_PUBLIC_API_URL || this.MOCK_API_URL;
  },

  // Timeout settings
  TIMEOUT: 30000, // 30 seconds

  // Token storage key
  TOKEN_KEY: 'authToken',

  // API endpoints
  ENDPOINTS: {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      // eslint-disable-next-line sonarjs/no-hardcoded-passwords
      FORGOT_PASSWORD: '/auth/forgot-password',
      // eslint-disable-next-line sonarjs/no-hardcoded-passwords
      RESET_PASSWORD: '/auth/reset-password',
      ME: '/auth/me',
      REFRESH_TOKEN: '/auth/refresh-token',
    },
    USER: {
      PROFILE: '/user/profile',
      UPDATE_PROFILE: '/user/profile',
      // eslint-disable-next-line sonarjs/no-hardcoded-passwords
      CHANGE_PASSWORD: '/user/change-password',
    },
    // Add more endpoint groups as needed
  },

  // Request headers
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
} as const;

export type ApiConfig = typeof API_CONFIG;
