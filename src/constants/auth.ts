import type {
  AuthCardContent,
  AuthConfirmContent,
  AuthFormConfig,
  AuthPageContent,
  AuthSocialProvider,
} from '@/types';

export const authSocialProviders: AuthSocialProvider[] = [
  {
    id: 'google',
    label: 'Continue with Google',
    icon: 'google',
  },
  {
    id: 'apple',
    label: 'Continue with Apple',
    icon: 'apple',
  },
  {
    id: 'linkedin',
    label: 'Continue with LinkedIn',
    icon: 'linkedin',
  },
];

export const loginContent: AuthPageContent = {
  id: 'login-page',
  eyebrow: 'Welcome back',
  title: 'Log in to fastras',
  description:
    'Access your personalized training programs, track progress, and stay on top of every healthy habit.',
  image: '/images/hero-banner.jpg',
  imageAlt: 'Athlete training with kettlebell',
  footerPrompt: {
    text: "Don't have an account?",
    linkLabel: 'Register',
    linkHref: '/register',
  },
};

export const loginForm: AuthFormConfig = {
  id: 'login-form',
  fields: [
    {
      id: 'login-email',
      label: 'Email address',
      name: 'email',
      type: 'email',
      placeholder: 'you@example.com',
      autoComplete: 'email',
    },
    {
      id: 'login-password',
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      autoComplete: 'current-password',
    },
  ],
  submitLabel: 'Login',
  rememberMe: true,
  helperLink: {
    label: 'Forgot password?',
    href: '/forgot-password',
  },
  socialProviders: authSocialProviders,
};

export const registerContent: AuthPageContent = {
  id: 'register-page',
  eyebrow: 'Join the community',
  title: 'Create your fastras account',
  description:
    "Personalized courses, expert coaches, and nutrition plans are a few clicks away. Let's build your routine.",
  image: '/images/about-banner.jpg',
  imageAlt: 'Coach supporting athlete with stretching routine',
  footerPrompt: {
    text: 'Already have an account?',
    linkLabel: 'Login',
    linkHref: '/login',
  },
};

export const registerForm: AuthFormConfig = {
  id: 'register-form',
  fields: [
    {
      id: 'register-name',
      label: 'Full name',
      name: 'fullName',
      type: 'text',
      placeholder: 'Taylor Morgan',
      autoComplete: 'name',
    },
    {
      id: 'register-email',
      label: 'Email address',
      name: 'email',
      type: 'email',
      placeholder: 'you@example.com',
      autoComplete: 'email',
    },
    {
      id: 'register-password',
      label: 'Password',
      name: 'password',
      type: 'password',
      placeholder: 'Create a password',
      autoComplete: 'new-password',
    },
    {
      id: 'register-confirm-password',
      label: 'Confirm password',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Re-enter password',
      autoComplete: 'new-password',
    },
  ],
  submitLabel: 'Create Account',
  disclaimer: 'By creating an account, you agree to our',
  agreements: {
    terms: {
      label: 'Terms of Service',
      href: '/terms',
    },
    privacy: {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  },
  socialProviders: authSocialProviders,
};

export const forgotPasswordContent: AuthCardContent = {
  id: 'forgot-password-card',
  eyebrow: 'Reset password',
  title: 'Send reset instructions',
  description:
    'Enter the email associated with your account and we will send you a secure link to reset your password.',
  primaryActionLabel: 'Send Reset Link',
  secondaryAction: {
    label: 'Back to login',
    href: '/login',
  },
};

export const forgotPasswordForm: AuthFormConfig = {
  id: 'forgot-password-form',
  fields: [
    {
      id: 'forgot-password-email',
      label: 'Email address',
      name: 'email',
      type: 'email',
      placeholder: 'you@example.com',
      autoComplete: 'email',
    },
  ],
  submitLabel: 'Send Reset Link',
};

export const resetPasswordContent: AuthCardContent = {
  id: 'reset-password-card',
  eyebrow: 'Create a new password',
  title: 'Choose a strong password',
  description:
    'Set a new password to secure your fastras account. Use at least 8 characters mixing letters and numbers.',
  note: 'Tip: Avoid using passwords you have used before across other platforms.',
  primaryActionLabel: 'Set New Password',
  secondaryAction: {
    label: 'Back to login',
    href: '/login',
  },
};

export const resetPasswordForm: AuthFormConfig = {
  id: 'reset-password-form',
  fields: [
    {
      id: 'reset-password-new',
      label: 'New password',
      name: 'password',
      type: 'password',
      placeholder: 'Create a password',
      autoComplete: 'new-password',
    },
    {
      id: 'reset-password-confirm',
      label: 'Confirm password',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Re-enter password',
      autoComplete: 'new-password',
    },
  ],
  submitLabel: 'Set New Password',
};

export const logoutContent: AuthConfirmContent = {
  id: 'logout-card',
  title: 'Ready to log out?',
  description:
    'You will be signed out of your fastras account on this device. You can sign back in anytime to continue your training.',
  confirmLabel: 'Logout',
  confirmHref: '/login',
  cancelAction: {
    label: 'Stay signed in',
    href: '/',
  },
};
