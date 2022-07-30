/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
// import CV from '../public/assets/cv.pdf';
import ME from '../../assets/me.png';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="h-screen text-center relative pt-28 overflow-hidden">
      <h5>Hello I'm</h5>
      <h1>First Last</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <div className="flex gap-5 mt-10 justify-center">
        {/* <a href={CV} download className="btn">
            Download CV
          </a> */}
        <a className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">
          Let's talk
        </a>
      </div>

      <div id="image" className="absolute mt-16 rounded-t-full overflow-hidden">
        <Image src={ME} alt="me" />
      </div>

      <a
        href="#contact"
        id="scroll__down"
        className="absolute rotate-90 right-0 bottom-12"
      >
        Scroll Down
      </a>

      <div
        id="header-socials"
        className="flex flex-col items-center gap-3 absolute left-0 bottom-12 "
      >
        <a href="https://linkedin.com" target="__blank">
          <BsLinkedin />
        </a>
        <a href="https://Github.com" target="__blank">
          <FaGithub />
        </a>
        <div className=" h-8 w-0.5 bg-primary " />
      </div>
    </div>
  );
}
