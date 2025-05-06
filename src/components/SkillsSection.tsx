<<<<<<< HEAD

=======
>>>>>>> 4d1d2db (Initial commit)
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Laptop, Server, Figma } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory = ({ title, icon, skills }: SkillCategoryProps) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-10 w-10 rounded-full bg-portfolio-100 text-portfolio-600 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-secondary text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
<<<<<<< HEAD
      title: 'Frontend',
      icon: <Laptop className="h-6 w-6" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Next.js', 'Tailwind CSS', 'SCSS', 'Bootstrap', 'Web Accessibility']
    },
    {
      title: 'Backend',
      icon: <Server className="h-6 w-6" />,
      skills: ['Node.js', 'Express', 'Django', 'Flask', 'RESTful APIs', 'GraphQL', 'JWT', 'OAuth']
=======
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['Python', 'C++'],
>>>>>>> 4d1d2db (Initial commit)
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6" />,
<<<<<<< HEAD
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Mongoose', 'Sequelize']
    },
    {
      title: 'DevOps',
      icon: <Globe className="h-6 w-6" />,
      skills: ['Git', 'GitHub', 'CI/CD', 'Docker', 'AWS', 'Heroku', 'Vercel', 'Netlify']
    },
    {
      title: 'Programming',
      icon: <Code className="h-6 w-6" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'PHP']
    },
    {
      title: 'Design',
      icon: <Figma className="h-6 w-6" />,
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX', 'Wireframing', 'Prototyping']
=======
      skills: ['MySQL', 'Firebase', 'MYSQL'],
    },
    {
      title: 'Machine Learning & Data Science',
      icon: <Laptop className="h-6 w-6" />,
      skills: ['Machine Learning', 'Data Analysis', 'Data Visualization', 'Business Impact Analysis','NLP','Computer Vision','Deep Learning'],
    },
    {
      title: 'Web Development',
      icon: <Server className="h-6 w-6" />,
      skills: ['Flask', 'HTML', 'CSS','React','JavaScript'],
    },
    {
      title: 'Other Skills',
      icon: <Globe className="h-6 w-6" />,
      skills: ['Leadership', 'Communication','Networking','Logo Design'],
>>>>>>> 4d1d2db (Initial commit)
    },
  ];

  return (
    <section id="skills">
      <div className="container-custom">
        <h2 className="section-heading">Skills & Technologies</h2>
        <p className="section-subheading">
          A comprehensive overview of my technical skill set and the technologies I work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
