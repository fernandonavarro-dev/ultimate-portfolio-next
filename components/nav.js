import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

export default function Nav() {
  const [activeNav, setactiveNav] = useState('#');
  return (
    <div
      id="nav"
      className="flex bg-gray-800 px-7 py-3 z-20 left-1/2 fixed -translate-x-1/2 bottom-8 gap-3 rounded-full backdrop-opacity-40"
    >
      <a
        id={activeNav === '#' ? 'active' : ''}
        className="bg-transparent p-4 rounded-3xl flex text-lg hover:bg-gray-900"
        href="#"
        onClick={() => setactiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        id={activeNav === '#about' ? 'active' : ''}
        className="bg-transparent p-4 rounded-3xl flex text-lg hover:bg-gray-900"
        href="#about"
        onClick={() => setactiveNav('#about')}
      >
        <AiOutlineUser />
      </a>
      <a
        id={activeNav === '#experience' ? 'active' : ''}
        className="bg-transparent p-4 rounded-3xl flex text-lg hover:bg-gray-900"
        href="#experience"
        onClick={() => setactiveNav('#experience')}
      >
        <BiBook />
      </a>
      <a
        id={activeNav === '#services' ? 'active' : ''}
        className="bg-transparent p-4 rounded-3xl flex text-lg hover:bg-gray-900"
        href="#services"
        onClick={() => setactiveNav('#services')}
      >
        <RiServiceLine />
      </a>
      <a
        id={activeNav === '#contact' ? 'active' : ''}
        className="bg-transparent p-4 rounded-3xl flex text-lg hover:bg-gray-900"
        href="#contact"
        onClick={() => setactiveNav('#contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
}
