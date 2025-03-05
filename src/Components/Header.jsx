import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from './Logo';




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        {/* <div className="text-2xl font-bold text-blue-800">
          <Link to="/">Tekobliss</Link>
        </div> */}

        <Logo />



        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600 transition duration-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600 transition duration-300'
              }
            >
              About
            </NavLink>
          </li>

          {/* Dropdown Menu for Solutions */}
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-x-1 hover:text-blue-600 transition duration-300"
              onClick={toggleDropdown}
            >
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } group-hover:opacity-100 group-hover:visible`}
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/solutions/Scheduling Software"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition"
                    onClick={closeDropdown}
                  >
                    Scheduling Software
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/Invoicing Software"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition"
                    onClick={closeDropdown}
                  >
                    Invoicing Software
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/solutions/cybersecurity"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition"
                    onClick={closeDropdown}
                  >
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/custom-software"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition"
                    onClick={closeDropdown}
                  >
                    Custom Software
                  </Link>
                </li> */}
              </ul>
            </div>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600 transition duration-300'
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600 transition duration-300'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link to="/getStarted">
            <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              < XIcon className="h-6 w-6 text-blue-800" />
            ) : (
              <MenuIcon className="h-6 w-6 text-blue-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={`md:hidden bg-white shadow-lg transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <li className="border-b">
          <Link
            to="/"
            className="block py-3 px-6 text-gray-700 hover:bg-blue-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li className="border-b">
          <Link
            to="/about"
            className="block py-3 px-6 text-gray-700 hover:bg-blue-50"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>

        {/* Solutions Submenu */}
        <li className="border-b">
          <button
            className="block w-full text-left py-3 px-6 text-gray-700 hover:bg-blue-50"
            onClick={toggleMobileDropdown}
          >
            Solutions
          </button>
          <ul className={`pl-6 transition-all duration-300 ${isMobileDropdownOpen ? 'block' : 'hidden'}`}>
            <li>
              <Link to="/solutions/cloud" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-blue-600">
                Cloud Solutions
              </Link>
            </li>
            <li>
              <Link to="/solutions/mobile" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-blue-600">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link to="/solutions/cybersecurity" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-blue-600">
                Cybersecurity
              </Link>
            </li>
            <li>
              <Link to="/solutions/custom-software" onClick={toggleMenu} className="block py-2 text-gray-600 hover:text-blue-600">
                Custom Software
              </Link>
            </li>
          </ul>
        </li>
        <li className="border-b">
          <Link
            to="/services"
            className="block py-3 px-6 text-gray-700 hover:bg-blue-50"
            onClick={toggleMenu}
          >
            Services
          </Link>
        </li>
        <li className="border-b">
          <Link
            to="/contact"
            className="block py-3 px-6 text-gray-700 hover:bg-blue-50"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
        <li className="p-4 text-center">
          <Link to="/contact">
            <button className= " bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
