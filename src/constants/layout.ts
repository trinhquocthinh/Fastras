import type { ElementType } from 'react';

import type { NavLink, SocialLink } from '@/types';

import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoSkype,
  IoLogoTwitter,
} from 'react-icons/io5';

export const siteName = 'fastras';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'All Course', href: '#course' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: Array<SocialLink & { Icon: ElementType }> = [
  { id: 'facebook', label: 'Facebook', href: '#', Icon: IoLogoFacebook },
  { id: 'skype', label: 'Skype', href: '#', Icon: IoLogoSkype },
  { id: 'twitter', label: 'Twitter', href: '#', Icon: IoLogoTwitter },
  { id: 'linkedin', label: 'LinkedIn', href: '#', Icon: IoLogoLinkedin },
];

export const footerCourseLinks = [
  { id: 'daily-exercise', label: 'Daily Exercise', href: '#' },
  { id: 'find-your-balance', label: 'Find Your Balance', href: '#' },
  { id: 'personal-program', label: 'Personal Program', href: '#' },
  { id: 'natural-process', label: 'Natural Process', href: '#' },
  { id: 'immune-system', label: 'Immune System', href: '#' },
  { id: 'gives-you-energy', label: 'Gives You Energy', href: '#' },
];

export const footerHelpLinks = [
  { id: 'privacy-policy', label: 'Privacy Policy', href: '#' },
  { id: 'discussion', label: 'Discussion', href: '#' },
  { id: 'terms', label: 'Terms & Conditions', href: '#' },
  { id: 'customer-support', label: 'Customer Support', href: '#' },
  { id: 'faq', label: "Course FAQ's", href: '#' },
  { id: 'online-classes', label: 'Online Classes', href: '#' },
];

export const footerHours = [
  { id: 'weekday', label: 'Mon-Fri: 9 AM – 6 PM', href: '#' },
  { id: 'saturday', label: 'Saturday: 9 AM – 4 PM', href: '#' },
  { id: 'sunday', label: 'Sunday: Closed', href: '#' },
];

export const footerBottomLinks = [
  { id: 'terms', label: 'Terms of Service', href: '#' },
  { id: 'privacy', label: 'Privacy Policy', href: '#' },
  { id: 'sitemap', label: 'Sitemap', href: '#' },
  { id: 'security', label: 'Security', href: '#' },
];
