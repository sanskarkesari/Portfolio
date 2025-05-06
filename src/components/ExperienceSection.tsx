import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  isLeft?: boolean;
}

const ExperienceItem = ({ title, company, period, location, description, isLeft }: ExperienceItemProps) => {
  return (
    <div className={`mb-16 md:mb-24 relative ${isLeft ? 'md:text-right' : ''}`}>
      {/* Timeline dot */}
      <div className="absolute top-0 left-0 md:left-1/2 w-6 h-6 bg-portfolio-600 rounded-full border-4 border-white md:transform md:translate-x-[-50%] z-10"></div>
      
      {/* Content card */}
      <div className={`ml-10 md:ml-0 ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}>
        <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-portfolio-600">
          <div className="flex items-center gap-3 mb-3">
            <Briefcase size={20} className="text-portfolio-600" />
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <h4 className="font-semibold text-lg text-portfolio-700">{company}</h4>
          <div className="flex flex-wrap items-center gap-x-3 text-sm text-muted-foreground mt-2 mb-4">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{period}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
            <span>{location}</span>
          </div>
          <ul className={`list-disc ${isLeft ? 'md:list-inside' : 'ml-5'} space-y-2`}>
            {description.map((item, index) => (
              <li key={index} className="text-muted-foreground mb-1">{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'EvoAstra Ventures',
      period: 'Jul 2024 - Aug 2024',
      location: '',
      description: [
        'Conducted data scraping from various sources to collect and process large datasets.',
        'Performed exploratory data analysis to extract insights and identify key trends.',
        'Worked on data visualization techniques to present findings effectively.',
        'Contributed to data-driven decision-making by providing actionable insights.'
      ]
    }
  ];

  return (
    <section id="experience" className="bg-secondary/50 py-20 md:py-32">
      <div className="container-custom">
        <h2 className="section-heading">Work Experience</h2>
        <p className="section-subheading">
          My professional journey in the tech industry and the roles I've had the opportunity to serve in.
        </p>

        <div className="timeline-container mt-24 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-portfolio-300 -z-10"></div>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              {...experience}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
