import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">
          Data Scientist | Machine Learning | Data Analysis | Web Development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a proficient <strong>Data Scientist</strong> with extensive experience in <strong>machine learning algorithms</strong>, <strong>natural language processing</strong>, and <strong>data analysis</strong>. My skills enable me to extract actionable insights from complex datasets and deliver impact-full presentations to stakeholders.
              </p>
              <p>
                I have a strong background in <strong>web development</strong>, allowing me to integrate analytical solutions with user-friendly interfaces, enhancing data accessibility and usability. My leadership and communication abilities have helped me lead cross-functional teams and deliver results.
              </p>
              <p>
                <strong>Contact:</strong> sanskar4368@gmail.com | Chennai, Tamil Nadu | +91 6390637775
              </p>
            </div>
            <a href="#contact">
              <Button className="mt-6" size="lg">
              Contact Me
            </Button></a>
            
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'C++', 'MySQL', 'Machine Learning', 'Data Visualization', 'Business Impact Analysis', 'Flask', 'Firebase', 'SQL', 'Data Scraping', 'Data Analysis', 'Leadership', 'Communication'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
