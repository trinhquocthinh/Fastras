import React, { memo, type CSSProperties } from 'react';

import { blogPosts } from '@/constants/home';
import { getImagePath } from '@/lib/getImagePath';

import './BlogSection.scss';

const BlogSection = () => {
  const titleWrapperStyle = {
    '--title-shape': `url(${getImagePath('/images/title-shape-white.png')})`,
  } as CSSProperties;

  return (
    <section className="section blog" aria-label="blog" id="blog" data-section>
      <div className="container">
        <div className="title-wrapper" style={titleWrapperStyle}>
          <p className="section-subtitle">Our Blog Post</p>

          <h2 className="h2 section-title">Latest Article of Nutrition</h2>
        </div>

        <ul className="grid-list">
          {blogPosts.map(post => (
            <li key={post.id}>
              <article className="blog-card">
                <div className="wrapper">
                  <time className="publish-date" dateTime={post.date}>
                    <span className="span">{post.dateLabel.split(' ')[0]}</span>{' '}
                    {post.dateLabel.split(' ')[1]}
                  </time>

                  <div>
                    <div className="card-author">
                      <a href={post.authorHref} className="card-link">
                        By: <span className="span">{post.author}</span>
                      </a>
                    </div>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <p className="item-text">{post.likes} Likes</p>
                      </li>

                      <li className="card-meta-item">
                        <p className="item-text">{post.shares} Share</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="h3">
                  <a href={post.href} className="card-title">
                    {post.title}
                  </a>
                </h3>

                <p className="card-text">{post.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default memo(BlogSection);
