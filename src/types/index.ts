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
