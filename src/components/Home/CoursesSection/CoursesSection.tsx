import Image from 'next/image';
import { memo, type CSSProperties } from 'react';

import { courses } from '@/constants/home';
import { getImagePath } from '@/lib/getImagePath';

import './CoursesSection.scss';

const CoursesSection = () => {
  const figureStyle = {
    '--width': 350,
    '--height': 300,
  } as CSSProperties;

  const titleWrapperStyle = {
    '--title-shape': `url(${getImagePath('/images/title-shape-white.png')})`,
  } as CSSProperties;

  return (
    <section
      className="section course"
      aria-label="course"
      id="course"
      data-section
    >
      <div className="container">
        <div className="title-wrapper" style={titleWrapperStyle}>
          <p className="section-subtitle">100+ Courses Available</p>

          <h2 className="h2 section-title">Fitness &amp; Nutrition Courses</h2>
        </div>

        <ul className="grid-list">
          {courses.map(course => (
            <li key={course.id}>
              <div className="course-card">
                <figure className="card-banner img-holder" style={figureStyle}>
                  <Image
                    src={course.image}
                    alt={course.imageAlt}
                    width={350}
                    height={300}
                    className="img-cover"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value={course.price}>
                    {course.priceLabel}
                  </data>

                  <p className="card-author">
                    <a href={course.authorHref} className="card-link">
                      By: <span className="span">{course.author}</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href={course.href} className="card-title">
                      {course.title}
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time dateTime={course.duration}>
                        {course.durationLabel}
                      </time>
                    </li>

                    <li className="card-meta-item">
                      <p className="card-meta-text">{course.lecturesLabel}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(CoursesSection);
