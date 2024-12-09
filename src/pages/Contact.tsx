import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => (
    <section className="py-16 pb-20 bg-gray-800 text-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mb-4">
          Feel free to reach out to me through any of the following platforms:
        </p>
        <div className="flex justify-center space-x-8">
        <a href="https://github.com/Hector-Vigil" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/hector-vigil-escalera/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          <FaLinkedin size={32} />
        </a>
        <a href="mailto:hector.vigilescalera@gmail.com" className="text-blue-500">
          <FaEnvelope size={32} />
        </a>
        </div>
      </div>
    </section>
);

export default Contact;
