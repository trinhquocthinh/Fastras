export type ApiResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
};

export type User = {
  id: string;
  email: string;
  fullName: string;
};

export type AuthResponse = {
  user: User;
  token: string;
};

export type LoginRequest = {
  email: string;
  password: string;
  remember?: boolean;
};

export type RegisterRequest = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ForgotPasswordRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
  confirmPassword: string;
};
