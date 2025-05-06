<<<<<<< HEAD

=======
>>>>>>> 4d1d2db (Initial commit)
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tags, githubUrl, index }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg border border-border h-full flex flex-col">
<<<<<<< HEAD
      <div className="relative overflow-hidden h-48">
        <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center">
          <span className="text-sm text-zinc-500">Project Image</span>
        </div>
        {/* This would be replaced with an actual image like:
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        /> */}
=======
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
>>>>>>> 4d1d2db (Initial commit)
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <Link to={`/project/${index}`}>
            View Details
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
