import type { Route } from 'next';
import Link from 'next/link';
import { memo, type ReactNode } from 'react';

import type { AuthCardContent } from '@/types';

import './AuthCardLayout.scss';

type AuthCardLayoutProps = {
  content: AuthCardContent;
  children: ReactNode;
};

const AuthCardLayout = ({ content, children }: AuthCardLayoutProps) => {
  const titleId = `${content.id}-title`;
  const descriptionId = content.description
    ? `${content.id}-description`
    : undefined;

  return (
    <section
      className="auth-card"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className="auth-card__wrapper">
        <div className="auth-card__box">
          {content.eyebrow ? (
            <p className="auth-card__eyebrow">{content.eyebrow}</p>
          ) : null}

          <h1 className="auth-card__title h1" id={titleId}>
            {content.title}
          </h1>

          {content.description ? (
            <p className="auth-card__description" id={descriptionId}>
              {content.description}
            </p>
          ) : null}

          {children}

          {content.note ? (
            <p className="auth-card__note">{content.note}</p>
          ) : null}

          {content.secondaryAction ? (
            <p className="auth-card__secondary">
              <Link href={content.secondaryAction.href as Route}>
                {content.secondaryAction.label}
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default memo(AuthCardLayout);
