import type { Route } from 'next';
import Link from 'next/link';
import { memo, type CSSProperties, type ReactNode } from 'react';

import { getImagePath } from '@/lib/getImagePath';
import type { AuthPageContent } from '@/types';

import './AuthSplitLayout.scss';

type AuthSplitLayoutProps = {
  content: AuthPageContent;
  children: ReactNode;
};

const AuthSplitLayout = ({ content, children }: AuthSplitLayoutProps) => {
  const titleId = `${content.id}-title`;
  const descriptionId = `${content.id}-description`;

  const illustrationStyle = {
    '--auth-illustration': `url(${getImagePath(content.image)})`,
  } as CSSProperties;

  return (
    <section
      className="auth-split"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="auth-split__grid">
        <div className="auth-split__media" style={illustrationStyle}>
          <div className="auth-split__media-inner">
            <p className="auth-split__eyebrow">{content.eyebrow}</p>
            <h1 className="auth-split__title h1" id={titleId}>
              {content.title}
            </h1>
            <p className="auth-split__description" id={descriptionId}>
              {content.description}
            </p>
          </div>
        </div>

        <div className="auth-split__content">
          <div className="auth-split__card">
            {children}

            {content.footerPrompt ? (
              <p className="auth-split__footer">
                {content.footerPrompt.text}{' '}
                <Link
                  className="auth-split__footer-link"
                  href={content.footerPrompt.linkHref as Route}
                >
                  {content.footerPrompt.linkLabel}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AuthSplitLayout);
