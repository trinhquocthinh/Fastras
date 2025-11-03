import { IoChevronUp } from 'react-icons/io5';

import './BackToTopButton.scss';

export type BackToTopButtonProps = {
  isVisible: boolean;
};

const BackToTopButton = ({ isVisible }: BackToTopButtonProps) => (
  <a
    href="#top"
    className={`back-top-btn${isVisible ? ' active' : ''}`}
    aria-label="back to top"
    data-back-top-btn
  >
    <IoChevronUp aria-hidden />
  </a>
);

export default BackToTopButton;
