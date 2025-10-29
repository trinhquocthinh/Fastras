import { memo } from 'react';

import { heroContent } from '@/constants/home';
import { getImagePath } from '@/lib/getImagePath';

import './HeroSection.scss';

const HeroSection = () => {
  const backgroundImage = getImagePath(heroContent.backgroundImage);

  return (
    <section
      className="section hero"
      aria-label="hero"
      id={heroContent.id}
      data-section
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <p className="hero-subtitle">{heroContent.subtitle}</p>

        <h1 className="h1 hero-title">{heroContent.title}</h1>

        <p className="hero-text">{heroContent.description}</p>

        <a href={heroContent.ctaHref} className="btn btn-secondary">
          {heroContent.ctaLabel}
        </a>

        <div className="social-wrapper">
          <p className="social-title">Connect with us:</p>

          <ul className="social-list">
            {heroContent.socialLinks.map(({ id, href, label, Icon }) => (
              <li key={id}>
                <a href={href} className="social-link" aria-label={label}>
                  <Icon aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
