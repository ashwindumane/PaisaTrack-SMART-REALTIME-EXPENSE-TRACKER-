import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className='flex justify-between items-center bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30'>

      {/* Mobile Menu Toggle Button */}
      <div className='flex items-center gap-5'>
        <button
          className='block lg:hidden text-black'
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
        >
          {openSideMenu ? (
            <HiOutlineX className='text-2xl' />
          ) : (
            <HiOutlineMenu className='text-2xl' />
          )}
        </button>

        <h2 className='text-xl lg:text-2xl font-semibold text-black tracking-wide'>
          पैसा <span className='text-primary'>TRACK</span> – SMART REALTIME EXPENSE TRACKER
        </h2>
      </div>

      {/* Social Icons */}
      <div className='flex items-center gap-4 text-xl'>
        <a
          href='https://www.linkedin.com/in/ashwindumane/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-blue-600 transition'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/ashwindumane'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-black transition'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.instagram.com/ashwin_kshatriya_/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-600 hover:text-pink-500 transition'
        >
          <FaInstagram />
        </a>
      </div>

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div className='fixed top-[61px] -ml-4 bg-white'>
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
