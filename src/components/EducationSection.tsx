import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

const EducationItem = ({ degree, institution, period, location, description }: EducationItemProps) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-portfolio-100 text-portfolio-600 flex items-center justify-center mt-1">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-xl">{degree}</h3>
            <h4 className="font-medium text-lg">{institution}</h4>
            <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground mt-1 mb-3">
              <span>{period}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
              <span>{location}</span>
            </div>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EducationSection = () => {
  const educationItems = [
    {
      degree: 'B.Tech in Computer Science and Information Technology',
      institution: 'SRM Institute of Science and Technology',
      period: 'Aug 2022 - Present',
      location: 'Chennai',
      description: 'Current CGPA: 9.33. B-TECH in Computer Science and IT.'
    },
    {
      degree: '12th (CBSE)',
      institution: 'Navrachana School',
      period: 'Jun 2020 - Jun 2021',
      location: 'Vadodara',
      description: 'Percentage: 84%'
    },
    {
      degree: '10th (CBSE)',
      institution: 'Delhi Public School',
      period: 'May 2018 - May 2019',
      location: 'Prayagraj',
      description: 'Percentage: 92%'
    },
  ];

  return (
    <section id="education" className="bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-heading">Education</h2>
        <p className="section-subheading">
          My academic background and continuous learning journey.
        </p>

        <div className="grid gap-6 mt-12">
          {educationItems.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
