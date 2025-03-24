import React from 'react';

const Projects = () => {
    const projectsData = [
        {
            title: "Kratos'24",
            image: "/kratos.png",
            description: "An online event registration website for my department(CSE)'s Symposium.",
            technologies: ["React", "Django", "Sheets API", "Vercel","PythonAnywhere"]
        },
        {
            title: "Retweet'25",
            image: "/retweet.png",
            description: "An online event registration website for the inter-SRM event, Retweet'25. The website is complete with user authentication, automated emails, and real time updation.",
            technologies: ["React", "Node.js", "Firebase","Sheets API","Vercel"]
        },
        {
            title: "Barcode Attendance Scanner",
            image: "/qr.png",
            description: "A mobile app that scans barcodes on the back of student ID cards to count them as Present. The scans are fast and are tested for concurrency.",
            technologies: ["React Native", "Expo", "Redis", "Upstash"]
        },
        {
            title: "PC Build Assisstant",
            image: "/pcbuilder.png",
            description: "An interactive AI chatbot that recommends real components based on user budget and specifications.",
            technologies: ["Python", "Pytorch", "Flask", "HTML"]
        },
        {
            title: "ChemCalc",
            image: "/chem.png",
            description: "An interactive all-inclusive Chemistry Calculator that provides scientific information on all elements while providing an intuitive Reaction Balancer.",
            technologies: ["Python", "PySimpleGUI", "Chemlib"]
        },
        {
            title: "Bakery E-commerce website",
            image: "/bakery.png",
            description: "An online e-commerce website for a fictional Bakery, finished with a working cart and purchase system.",
            technologies: ["HTML", "Javascript", "Node.js","Repl.it"]
        }
    ];

    return (
        <section id="projects" className="section bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md card">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">{tech}</span>
                                    ))}
                                </div>
                                <a href="https://github.com/KevinDenzil" className="text-indigo-600 hover:text-indigo-800 font-medium" target="_blank">View Project →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;