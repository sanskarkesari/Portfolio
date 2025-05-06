
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container-custom">
        <h2 className="section-heading">My Projects</h2>
        <p className="section-subheading">
          Here's a selection of projects I've worked on. Each project was an opportunity to learn and grow as a developer.
          Click on a project to see more details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
