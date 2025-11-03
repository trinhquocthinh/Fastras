import type { ElementType } from 'react';

import { socialLinks } from '@/constants/layout';
import type { AppLink, BlogPost, Course, Service, SocialLink } from '@/types';

export const heroContent = {
  id: 'home',
  subtitle: 'Fitness & Nutrition',
  title: 'This life style for your fitness, not only diet.',
  description: 'It has survived not only five centuries but also',
  ctaLabel: 'Start Course',
  ctaHref: '#course',
  backgroundImage: '/images/hero-banner.jpg',
  socialLinks,
} satisfies {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage: string;
  socialLinks: Array<SocialLink & { Icon: ElementType }>;
};

export const services: Service[] = [
  {
    id: 'service-women',
    title: 'Women’s Course',
    description:
      'Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.',
    href: '#',
    image: '/images/service-1.svg',
    imageAlt: 'Women’s Course',
  },
  {
    id: 'service-basic',
    title: 'Basic Course',
    description:
      'Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.',
    href: '#',
    image: '/images/service-2.svg',
    imageAlt: 'Basic Course',
    highlight: true,
  },
  {
    id: 'service-men',
    title: 'Men’s Course',
    description:
      'Lorem Ipsum is simply dummy themes industryes psum has been them industry the loep into type setting.',
    href: '#',
    image: '/images/service-3.svg',
    imageAlt: 'Men’s Course',
  },
];

export const aboutContent = {
  id: 'about',
  subtitle: '25+ Years Of Experience',
  title: 'We have expert instructor for help our students.',
  description:
    'Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when an unknown printe specimen book has survived centuries.',
  highlightTitle: '100+ Courses',
  highlightDescription:
    'Lorem Ipsum is simply dummy text the printing and typesetting standard dummy text ever since the 150 when an unknown printe specimen book has survived centuries.',
  bannerImage: '/images/about-banner.jpg',
  bannerAlt: 'Instructor guiding a student',
  bannerCtaLabel: 'Meet Instructor',
  bannerCtaHref: '#',
};

export const courses: Course[] = [
  {
    id: 'course-children-nutrition',
    title: 'Children Nutrition and Cooking',
    href: '#',
    price: 98,
    priceLabel: '$98',
    author: 'Ryan Patterson',
    authorHref: '#',
    duration: 'PT8H20M',
    durationLabel: '08 hr 20 mins',
    lectures: 28,
    lecturesLabel: '28 Lectures',
    image: '/images/courses-1.jpg',
    imageAlt: 'Nutrition coach preparing healthy meal',
  },
  {
    id: 'course-introduction-health',
    title: 'Introduction to Food and Health.',
    href: '#',
    price: 72,
    priceLabel: '$72',
    author: 'Arlene Daniels',
    authorHref: '#',
    duration: 'PT9H25M',
    durationLabel: '09 hr 25 mins',
    lectures: 16,
    lecturesLabel: '16 Lectures',
    image: '/images/courses-2.jpg',
    imageAlt: 'Colorful meal preparation on a table',
  },
  {
    id: 'course-pregnancy-lifestyle',
    title: 'Nutrition and Lifestyle in Pregnancy',
    href: '#',
    price: 68,
    priceLabel: '$68',
    author: 'Selina Benton',
    authorHref: '#',
    duration: 'PT3H38M',
    durationLabel: '03 hr 38 mins',
    lectures: 18,
    lecturesLabel: '18 Lectures',
    image: '/images/courses-3.jpg',
    imageAlt: 'Pregnant person preparing nutritious food',
  },
  {
    id: 'course-expertise-fitness',
    title: 'Expertise on Fitness, Nutrition and Health',
    href: '#',
    price: 98,
    priceLabel: '$98',
    author: 'Ryan Patterson',
    authorHref: '#',
    duration: 'PT2H16M',
    durationLabel: '02 hr 16 mins',
    lectures: 14,
    lecturesLabel: '14 Lectures',
    image: '/images/courses-4.jpg',
    imageAlt: 'Trainer demonstrating exercise',
  },
  {
    id: 'course-hacking-exercise',
    title: 'Hacking exercise for health new science of fitness',
    href: '#',
    price: 72,
    priceLabel: '$72',
    author: 'Arlene Daniels',
    authorHref: '#',
    duration: 'PT6H12M',
    durationLabel: '06 hr 12 mins',
    lectures: 35,
    lecturesLabel: '35 Lectures',
    image: '/images/courses-5.jpg',
    imageAlt: 'Team workout session in gym',
  },
  {
    id: 'course-weight-loss-plan',
    title: 'Designing Your Personal Weight Loss Plan',
    href: '#',
    price: 68,
    priceLabel: '$68',
    author: 'Selina Benton',
    authorHref: '#',
    duration: 'PT9H34M',
    durationLabel: '09 hr 34 mins',
    lectures: 28,
    lecturesLabel: '28 Lectures',
    image: '/images/courses-6.jpg',
    imageAlt: 'Person planning a healthy diet',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-popularised-sheets-1',
    title: 'It was popularised sheets the release contain',
    description:
      'Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.',
    href: '#',
    date: '2022-02-24',
    dateLabel: '24 Feb',
    likes: 87,
    shares: 58,
    author: 'Maddie Rife',
    authorHref: '#',
  },
  {
    id: 'blog-popularised-sheets-2',
    title: 'It was popularised sheets the release contain',
    description:
      'Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.',
    href: '#',
    date: '2022-02-24',
    dateLabel: '24 Feb',
    likes: 87,
    shares: 58,
    author: 'Maddie Rife',
    authorHref: '#',
  },
  {
    id: 'blog-popularised-sheets-3',
    title: 'It was popularised sheets the release contain',
    description:
      'Lorem sum same dummy text theme industry psum have been them industry the leaf into type setting.',
    href: '#',
    date: '2022-02-24',
    dateLabel: '24 Feb',
    likes: 87,
    shares: 58,
    author: 'Maddie Rife',
    authorHref: '#',
  },
];

export const appLinks: AppLink[] = [
  {
    id: 'play-store',
    href: '#',
    label: 'Play Store',
    image: '/images/play-store.jpg',
    imageAlt: 'Play Store',
    width: 134,
    height: 38,
  },
  {
    id: 'app-store',
    href: '#',
    label: 'App Store',
    image: '/images/app-store.jpg',
    imageAlt: 'App Store',
    width: 132,
    height: 38,
  },
];
