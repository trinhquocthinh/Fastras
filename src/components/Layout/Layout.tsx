'use client';

import type { KeyboardEvent, ReactNode } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import BackToTopButton from '@/components/Layout/BackToTop';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';

export type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const closeNav = useCallback(() => {
    setNavOpen(false);
  }, []);

  const toggleNav = useCallback(() => {
    setNavOpen(prev => !prev);
  }, []);

  const handleOverlayKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        closeNav();
      }
    },
    [closeNav]
  );

  useEffect(() => {
    const handleScroll = () => {
      const isActive = window.scrollY >= 100;
      setHeaderActive(isActive);
      setShowBackToTop(isActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        rootMargin: '0px 0px -25% 0px',
        threshold: 0.15,
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  const overlayClassName = useMemo(
    () => `overlay${navOpen ? ' active' : ''}`,
    [navOpen]
  );

  return (
    <>
      <Header
        isActive={headerActive}
        isNavOpen={navOpen}
        onToggleNav={toggleNav}
        onCloseNav={closeNav}
      />
      <div
        className={overlayClassName}
        data-overlay
        onClick={closeNav}
        onKeyDown={handleOverlayKeyDown}
        role="button"
        tabIndex={navOpen ? 0 : -1}
        aria-label="Close navigation menu"
      />
      <main>{children}</main>
      <Footer />
      <BackToTopButton isVisible={showBackToTop} />
    </>
  );
};

export default Layout;
