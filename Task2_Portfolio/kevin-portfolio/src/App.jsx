import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="font-sans text-gray-800 antialiased">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;