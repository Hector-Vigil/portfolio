import React from 'react';
import { projects } from '../constants/projects';

const Projects: React.FC = () => (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <ul className="mt-4">
                {project.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="inline-block bg-gray-200 text-sm px-2 py-1 rounded mr-2 mb-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-4 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
);

export default Projects;