import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";
const navLists = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Contact Us", path: "/contact-us" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white py-3 sm:py-6 border">
      <nav className="container mx-auto flex justify-between items-center px-5">
        <a href="/" className="text-2xl font-bold">
          My<span className="text-red-500">Blog</span>
        </a>
        <ul className="sm:flex hidden items-center gap-8">
          {navLists.map((list, index) => (
            <li key={index} className="text-base">
              <NavLink to={list.path}>{list.name}</NavLink>
            </li>
          ))}
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-4 bg-alabaster rounded text-sm text-gray-500 hover:text-gray-900"
          >
            {isMenuOpen ? (
              <IoClose className="size-6" />
            ) : (
              <IoMenuSharp className="size-6" />
            )}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="fixed top-[80px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
          {navLists.map((list, index) => (
            <li
              onClick={() => setIsMenuOpen(false)}
              key={index}
              className="text-base mt-5 px-4"
            >
              <NavLink to={list.path}>{list.name}</NavLink>
            </li>
          ))}
          <li onClick={() => setIsMenuOpen(false)} className="px-4 mt-5">
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
