import React from 'react';

const Footer = () => {
    // Function to handle mobile menu toggle
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    };

    // Function to close mobile menu when clicking on a link
    const closeMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    };

    // Add event listeners when component mounts
    React.useEffect(() => {
        const menuButton = document.getElementById('menu-button');
        const mobileLinks = document.querySelectorAll('#mobile-menu a');

        if (menuButton) {
            menuButton.addEventListener('click', toggleMobileMenu);
        }

        if (mobileLinks) {
            mobileLinks.forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        }

        // Cleanup event listeners when component unmounts
        return () => {
            if (menuButton) {
                menuButton.removeEventListener('click', toggleMobileMenu);
            }

            if (mobileLinks) {
                mobileLinks.forEach(link => {
                    link.removeEventListener('click', closeMobileMenu);
                });
            }
        };
    }, []);

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="#header" className="text-2xl font-bold">Kevin Denzil</a>
                        <p className="text-gray-400 mt-2">Full Stack Developer</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-indigo-400 transition duration-300">Home</a>
                        <a href="#about" className="hover:text-indigo-400 transition duration-300">About</a>
                        <a href="#projects" className="hover:text-indigo-400 transition duration-300">Projects</a>
                        <a href="#contact" className="hover:text-indigo-400 transition duration-300">Contact</a>
                    </div>
                </div>
                <hr className="border-gray-700 my-6" />
                <div className="text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Kevin Denzil. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;