const ProjectCard: React.FC<{ title: string; description: string; link: string }> = ({ title, description, link }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-xl font-bold">{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Project</a>
  </div>
);

const Projects: React.FC = () => (
  <section id="projects" className="bg-gray-100 p-8">
    <h2 className="text-3xl font-bold text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <ProjectCard title="Expense Tracker" description="Track your expenses efficiently." link="#" />
      <ProjectCard title="Portfolio" description="This awesome portfolio site." link="#" />
      {/* Add more projects here */}
    </div>
  </section>
);
export default Projects;