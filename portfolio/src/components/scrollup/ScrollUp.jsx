import React, { useEffect } from 'react';
import './ScrollUp.css';

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('.scrollup');
      if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Odstraní posluchač událostí při odmontování komponenty
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Prázdné pole znamená, že se tento efekt spustí pouze po prvním renderu

  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup-icon"></i>
    </a>
  );
};

export default ScrollUp;