import React from 'react';

const Header = () => {
    return (
        <header id="header" className="section h-screen flex items-center gradient-bg">
            <div className="container mx-auto px-6 text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Kevin Denzil</h1>
                <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
                <a href="#about" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Learn More</a>
            </div>
        </header>
    );
};

export default Header;
