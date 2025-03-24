import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="section">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">My Resume</h2>
                <p className="text-lg mb-8">Download my resume to learn more about my education, work experience, and qualifications.</p>
                <a href="/Kevin_Denzil_Resume.pdf" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center hover:bg-indigo-700 transition duration-300" download="Kevin_Denzil_Resume">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Download Resume (PDF)
                </a>
            </div>
        </section>
    );
};

export default Resume;