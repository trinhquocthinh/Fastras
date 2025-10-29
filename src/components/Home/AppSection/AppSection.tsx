import Image from 'next/image';
import { memo } from 'react';

import { appLinks } from '@/constants/home';

import './AppSection.scss';

const AppSection = () => (
  <section className="section app" aria-label="app" data-section>
    <div className="container">
      <div className="app-card">
        <p className="section-subtitle">Mobile App Available</p>

        <h2 className="h2 section-title">
          Download our mobile app.
          <br />
          and start coaching anytime.
        </h2>

        <div className="wrapper">
          {appLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="app-link"
              aria-label={link.label}
            >
              <Image
                src={link.image}
                alt={link.imageAlt}
                width={link.width}
                height={link.height}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default memo(AppSection);
