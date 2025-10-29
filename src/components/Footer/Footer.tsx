import { IoHeart } from 'react-icons/io5';

import {
  footerBottomLinks,
  footerCourseLinks,
  footerHelpLinks,
  footerHours,
  siteName,
} from '@/constants/layout';

import './Footer.scss';
import Link from 'next/dist/client/link';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top section" data-section id="contact">
      <div className="container">
        <div className="footer-list">
          <p className="footer-list-title">Subscribe Newsletter</p>

          <p className="footer-list-text">
            Lorem Ipsum has been them an industry printer took a galley make
            book.
          </p>

          <form className="footer-form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email_address"
              id="newsletter-email"
              aria-label="Email address"
              placeholder="Enter email"
              required
              className="email-field"
            />

            <button type="submit" className="btn btn-secondary">
              Subscribe Now
            </button>
          </form>
        </div>

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">All Courses</p>
          </li>
          {footerCourseLinks.map(link => (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Help Links</p>
          </li>
          {footerHelpLinks.map(link => (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Opening Hours</p>
          </li>
          {footerHours.map(link => (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <p className="footer-list-title address-title">Location</p>
          </li>

          <li>
            <address className="address">
              176 W street name, New
              <br />
              York, NY 10014
            </address>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} {siteName} Made With{' '}
          <IoHeart aria-hidden /> by{' '}
          <Link href="/" className="copyright-link">
            koolmater
          </Link>
        </p>

        <ul className="footer-bottom-list">
          {footerBottomLinks.map(link => (
            <li className="footer-bottom-item" key={link.id}>
              <a href={link.href} className="footer-bottom-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
