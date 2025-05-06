<<<<<<< HEAD

=======
>>>>>>> 4d1d2db (Initial commit)
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">
<<<<<<< HEAD
          Here you'll find more information about me, what I do, and my current skills
=======
          Data Scientist | Machine Learning | Data Analysis | Web Development
>>>>>>> 4d1d2db (Initial commit)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
<<<<<<< HEAD
                I'm a <strong>Full Stack Web Developer</strong> with a passion for building web applications with great user experiences.
                I specialize in JavaScript and have experience working with React, Node.js, and various other modern technologies.
              </p>
              <p>
                I have a background in Computer Science and have worked on various projects ranging from small business websites to complex web applications.
                I enjoy solving problems and continuously learning new technologies to stay up-to-date in this fast-evolving field.
              </p>
              <p>
                When I'm not coding, you can find me exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes in the kitchen.
                I'm always open to new opportunities and collaborations.
              </p>
            </div>
            <Button className="mt-6" size="lg">
              Contact Me
            </Button>
=======
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
            
>>>>>>> 4d1d2db (Initial commit)
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
<<<<<<< HEAD
              {[
                'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 
                'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
                'Git', 'GitHub', 'Tailwind CSS', 'REST API', 'GraphQL',
                'Responsive Design', 'UI/UX Design', 'Figma', 'Jest', 'AWS'
              ].map(skill => (
=======
              {['Python', 'C++', 'MySQL', 'Machine Learning', 'Data Visualization', 'Business Impact Analysis', 'Flask', 'Firebase', 'SQL', 'Data Scraping', 'Data Analysis', 'Leadership', 'Communication'].map(skill => (
>>>>>>> 4d1d2db (Initial commit)
                <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm border">
                  {skill}
                </span>
              ))}
            </div>
<<<<<<< HEAD
            <Button variant="outline" className="mt-6" size="lg">
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </Button>
=======
>>>>>>> 4d1d2db (Initial commit)
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
