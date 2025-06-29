import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect } from 'react';
import { projects } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = parseInt(id || '0');
  const project = projects[projectIndex];

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Button asChild>
          <Link to="/#projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to projects
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-custom py-12 md:py-20">
        <Link to="/#projects" className="inline-flex items-center text-portfolio-600 hover:text-portfolio-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all projects
        </Link>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">{tag}</Badge>
          ))}
        </div>

        <div className="prose max-w-none mb-10">
          <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
          
          {project.longDescription && (
            <div className="mb-10">
              {project.longDescription.map((para, idx) => (
                <p key={idx} className="mb-4">{para}</p>
              ))}
            </div>
          )}
        </div>

        {/* Main project image */}
        <div className="bg-zinc-100 rounded-lg overflow-hidden mb-8 shadow-md flex items-center justify-center" style={{minHeight: '350px'}}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[350px] md:h-[450px] object-contain bg-white"
          />
        </div>

        {/* Additional images gallery */}
        <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>

        {project.additionalImages && project.additionalImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {project.additionalImages.map((img, idx) => (
              <div 
                key={idx}
                className="relative h-[350px] md:h-[450px] bg-zinc-200 rounded-lg overflow-hidden shadow-md flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-[350px] md:h-[450px] object-contain bg-white"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-zinc-500 mb-12">No additional images available.</div>
        )}

        <div className="flex justify-center mt-12 gap-4">
          <Button variant="outline" size="lg" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View Code
            </a>
          </Button>
          {project.liveUrl && (
            <Button variant="default" size="lg" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
