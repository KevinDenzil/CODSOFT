import React from 'react';

const About = () => {
    return (
        <section id="about" className="section bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <img src="/profile.jpg" alt="Kevin Denzil" className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"/>
                    </div>
                    <div className="md:w-2/3 md:pl-12">
                        <p className="text-lg leading-relaxed mb-4">
                            I'm a passionate developer with experience in building web and mobile applications using React, Firebase, and Python. With a strong foundation in JavaScript and a growing expertise in TypeScript, I've worked on projects ranging from event registration platforms to barcode-based attendance systems.                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Beyond coding, I enjoy solving complex problems, exploring game development in Godot, and refining user experiences with intuitive design.</p>
                        <p className="text-lg leading-relaxed">
                            As the Content Head for the student council at Easwari Engineering College, I contribute to organizing and managing college events. I'm always eager to learn, experiment, and create efficient, scalable solutions.                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;