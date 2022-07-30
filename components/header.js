import React from 'react';
// import CV from '../public/assets/cv.pdf';

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>First Last</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div className="cta">
          {/* <a href={CV} download className="btn">
            Download CV
          </a> */}
          <a className="btn">Download CV</a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
}
