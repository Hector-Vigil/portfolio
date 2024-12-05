import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Expense Tracker',
    description: 'A web app to track expenses and income with analytics.',
    link: 'https://github.com/your-repo/expense-tracker',
    technologies: ['React', 'TypeScript', 'MongoDB'],
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive and interactive portfolio to showcase my work.',
    link: 'https://your-portfolio.vercel.app',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    title: 'E-Commerce Store',
    description: 'An online store with shopping cart functionality.',
    link: 'https://github.com/your-repo/e-commerce-store',
    technologies: ['Next.js', 'Stripe API', 'MongoDB'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <ul className="mt-4">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="inline-block bg-gray-200 text-sm px-2 py-1 rounded mr-2 mb-2">
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
};

export default Projects;