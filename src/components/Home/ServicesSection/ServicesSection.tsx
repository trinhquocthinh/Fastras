import Image from 'next/image';
import { memo } from 'react';
import { IoArrowForward } from 'react-icons/io5';

import { services } from '@/constants/home';

import './ServicesSection.scss';

const ServicesSection = () => (
  <section className="section service" aria-label="service" data-section>
    <div className="container">
      <ul className="grid-list">
        {services.map(service => (
          <li key={service.id}>
            <div
              className={`service-card${service.highlight ? ' active' : ''}`}
            >
              <div className="card-icon">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={60}
                  height={60}
                />
              </div>

              <h3 className="h3">
                <a href={service.href} className="card-title">
                  {service.title}
                </a>
              </h3>

              <p className="card-text">{service.description}</p>

              <a
                href={service.href}
                className="btn btn-secondary"
                aria-label={`Learn more about ${service.title}`}
              >
                <IoArrowForward aria-hidden />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default memo(ServicesSection);
