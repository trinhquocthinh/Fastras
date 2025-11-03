export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  highlight?: boolean;
};

export type Course = {
  id: string;
  title: string;
  href: string;
  price: number;
  priceLabel: string;
  author: string;
  authorHref: string;
  duration: string;
  durationLabel: string;
  lectures: number;
  lecturesLabel: string;
  image: string;
  imageAlt: string;
};

export type BlogPost = {
  id: string;
  title: string;
  href: string;
  description: string;
  date: string;
  dateLabel: string;
  likes: number;
  shares: number;
  author: string;
  authorHref: string;
};

export type AppLink = {
  id: string;
  href: string;
  label: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

export type AuthField = {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  autoComplete?: string;
};

export type AuthFormLink = {
  label: string;
  href: string;
};

export type AuthSocialProvider = {
  id: string;
  label: string;
  icon: 'google' | 'apple' | 'linkedin';
};

export type AuthPageContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  footerPrompt?: {
    text: string;
    linkLabel: string;
    linkHref: string;
  };
};

export type AuthFormConfig = {
  id: string;
  fields: AuthField[];
  submitLabel: string;
  helperText?: string;
  helperLink?: AuthFormLink;
  secondaryHelper?: AuthFormLink;
  rememberMe?: boolean;
  showSocialProviders?: boolean;
  disclaimer?: string;
  agreements?: {
    terms: AuthFormLink;
    privacy: AuthFormLink;
  };
  successMessage?: string;
  requiresToken?: boolean;
  socialProviders?: AuthSocialProvider[];
};

export type AuthCardContent = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  note?: string;
  primaryActionLabel: string;
  secondaryAction?: AuthFormLink;
};

export type AuthConfirmContent = {
  id: string;
  title: string;
  description: string;
  confirmLabel: string;
  confirmHref: string;
  cancelAction: AuthFormLink;
};
