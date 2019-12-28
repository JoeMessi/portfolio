import React, { useEffect } from 'react';
import './Header.css';
import joetransp from './Asset/joetransp.png';
import gsap from 'gsap';

function Header() {

  // gsap simple animation on useEffect
  useEffect(() => {
    gsap.from('#joe-img', {
      delay: 0.3,
      duration: 4,
      xPercent: 30,
      opacity: 0,
      ease: 'back'
    });
    gsap.from('#header-text h1', {
      delay: 0.3,
      duration: 4,
      xPercent: -30,
      opacity: 0,
      ease: 'back'
    });
    gsap.from('#header-text p', {
      delay: 0.3,
      duration: 4,
      xPercent: 10,
      opacity: 0,
      ease: 'back'
    });
  })

  return (
      <div id="header">

        <div id="img-container">
          <img id="joe-img" src={joetransp} alt="logo joe" />
        </div>

        <div id="header-text">
          <h1>Joe Messina</h1>
          <p>Full Stack Javascript Developer</p>
        </div>

      </div>
  );
}

export default Header;
