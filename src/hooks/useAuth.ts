'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { authService } from '@/services';
import type {
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from '@/services';

export const useAuth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginRequest) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.login(credentials);
      router.push('/');
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterRequest) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authService.register(userData);
      router.push('/');
      return data;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Registration failed. Please try again.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      await authService.logout();
      router.push('/login');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Logout failed. Please try again.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const forgotPassword = async (data: ForgotPasswordRequest) => {
    setLoading(true);
    setError(null);
    try {
      const message = await authService.forgotPassword(data);
      return message;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Failed to send reset email. Please try again.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (data: ResetPasswordRequest) => {
    setLoading(true);
    setError(null);
    try {
      const message = await authService.resetPassword(data);
      router.push('/login');
      return message;
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : 'Failed to reset password. Please try again.';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = authService.isAuthenticated();

  return {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated,
    loading,
    error,
  };
};
