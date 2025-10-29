import Image from 'next/image';
import { memo, type CSSProperties } from 'react';

import { aboutContent } from '@/constants/home';
import { getImagePath } from '@/lib/getImagePath';

import './AboutSection.scss';

const AboutSection = () => {
  const bannerStyle = {
    '--width': 470,
    '--height': 580,
    '--about-shape-1': `url(${getImagePath('/images/about-shape-1.png')})`,
  } as CSSProperties;

  const contentStyle = {
    '--about-shape-2': `url(${getImagePath('/images/about-shape-2.png')})`,
  } as CSSProperties;

  return (
    <section
      className="section about"
      aria-label="about"
      id={aboutContent.id}
      data-section
    >
      <div className="container">
        <div className="about-banner img-holder" style={bannerStyle}>
          <Image
            src={aboutContent.bannerImage}
            alt={aboutContent.bannerAlt}
            width={470}
            height={580}
            loading="lazy"
            className="img-cover"
          />

          <a href={aboutContent.bannerCtaHref} className="btn btn-secondary">
            {aboutContent.bannerCtaLabel}
          </a>
        </div>

        <div className="about-content" style={contentStyle}>
          <p className="section-subtitle">{aboutContent.subtitle}</p>

          <h2 className="h2 section-title">{aboutContent.title}</h2>

          <p className="section-text">{aboutContent.description}</p>

          <h3 className="about-h3">{aboutContent.highlightTitle}</h3>

          <p className="section-text">{aboutContent.highlightDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);
