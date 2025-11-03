'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { memo, useState, type FormEvent } from 'react';
import { FaApple, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

import type { AuthFormConfig } from '@/types';

import './AuthForm.scss';

type AuthFormProps = {
  config: AuthFormConfig;
  onSubmit?: (data: Record<string, string>) => Promise<void>;
};

const socialIcons = {
  google: FaGoogle,
  apple: FaApple,
  linkedin: FaLinkedinIn,
} as const;

const AuthForm = ({ config, onSubmit }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (!onSubmit) {
      return;
    }

    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};

    config.fields.forEach(field => {
      data[field.name] = formData.get(field.name) as string;
    });

    if (config.rememberMe) {
      data.remember = formData.get('remember') === 'on' ? 'true' : 'false';
    }

    setIsLoading(true);

    try {
      await onSubmit(data);
      setSuccess('Success!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const rememberId = `${config.id}-remember`;

  return (
    <form
      className="auth-form"
      id={config.id}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="auth-form__fields">
        {config.fields.map(field => (
          <div className="auth-form__field" key={field.id}>
            <label className="auth-form__label" htmlFor={field.id}>
              {field.label}
            </label>
            <input
              className="auth-form__input"
              id={field.id}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required
            />
          </div>
        ))}
      </div>

      {error ? (
        <div
          className="auth-form__message auth-form__message--error"
          role="alert"
        >
          {error}
        </div>
      ) : null}

      {success ? (
        <div
          className="auth-form__message auth-form__message--success"
          role="status"
        >
          {success}
        </div>
      ) : null}

      {config.rememberMe || config.helperLink ? (
        <div className="auth-form__extras">
          {config.rememberMe ? (
            <label className="auth-form__checkbox" htmlFor={rememberId}>
              <input
                className="auth-form__checkbox-input"
                type="checkbox"
                id={rememberId}
                name="remember"
                defaultChecked
              />
              <span>Remember me</span>
            </label>
          ) : null}

          {config.helperLink ? (
            <Link
              className="auth-form__helper-link"
              href={config.helperLink.href as Route}
            >
              {config.helperLink.label}
            </Link>
          ) : null}
        </div>
      ) : null}

      <button
        className="auth-form__submit btn btn-primary"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : config.submitLabel}
      </button>

      {config.secondaryHelper ? (
        <p className="auth-form__secondary-helper">
          <Link href={config.secondaryHelper.href as Route}>
            {config.secondaryHelper.label}
          </Link>
        </p>
      ) : null}

      {config.socialProviders?.length ? (
        <>
          <div className="auth-form__divider" role="presentation">
            <span>Or continue with</span>
          </div>

          <div className="auth-form__social-list">
            {config.socialProviders.map(provider => {
              const IconComponent = socialIcons[provider.icon];

              return (
                <button
                  className="auth-form__social-button"
                  type="button"
                  key={provider.id}
                >
                  <IconComponent aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </>
      ) : null}

      {config.disclaimer ? (
        <p className="auth-form__disclaimer">
          {config.disclaimer}
          {config.agreements ? (
            <div className="auth-form__agreements">
              <Link href={config.agreements.terms.href as Route}>
                {config.agreements.terms.label}
              </Link>
              &amp;
              <Link href={config.agreements.privacy.href as Route}>
                {config.agreements.privacy.label}
              </Link>
            </div>
          ) : null}
        </p>
      ) : null}
    </form>
  );
};

export default memo(AuthForm);
