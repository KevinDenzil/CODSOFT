import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed w-full bg-white shadow-md z-10">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#header" className="text-2xl font-bold text-indigo-600">Kevin Denzil</a>
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="text-gray-700 hover:text-indigo-600 transition duration-300">About</a>
                    <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition duration-300">Skills</a>
                    <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition duration-300">Projects</a>
                    <a href="#resume" className="text-gray-700 hover:text-indigo-600 transition duration-300">Resume</a>
                    <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition duration-300">Contact</a>
                </div>
                <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className={`md:hidden bg-white w-full ${isMenuOpen ? '' : 'hidden'}`}>
                <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
                    <a href="#about" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={closeMenu}>About</a>
                    <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={closeMenu}>Skills</a>
                    <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={closeMenu}>Projects</a>
                    <a href="#resume" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={closeMenu}>Resume</a>
                    <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition duration-300" onClick={closeMenu}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;