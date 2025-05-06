
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
=======
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
>>>>>>> 4d1d2db (Initial commit)

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const ContactItem = ({ icon, label, value, link }: ContactItemProps) => {
  const content = (
    <div className="flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-portfolio-100 text-portfolio-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className="block">{content}</a>;
  }

  return content;
};

const SocialButton = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
        {icon}
      </Button>
    </a>
  );
};

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container-custom">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subheading">
          Feel free to reach out if you'd like to collaborate or have any questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <Card>
              <CardContent className="p-6 space-y-6">
                <ContactItem 
                  icon={<Mail className="h-5 w-5" />} 
                  label="Email" 
<<<<<<< HEAD
                  value="your.email@example.com"
                  link="mailto:your.email@example.com" 
=======
                  value="sanskar4368@gmail.com"
                  
>>>>>>> 4d1d2db (Initial commit)
                />
                <ContactItem 
                  icon={<Phone className="h-5 w-5" />} 
                  label="Phone" 
<<<<<<< HEAD
                  value="+1 (555) 123-4567"
                  link="tel:+15551234567" 
=======
                  value="+91 6390637775"
                   
>>>>>>> 4d1d2db (Initial commit)
                />
                <ContactItem 
                  icon={<MapPin className="h-5 w-5" />} 
                  label="Location" 
<<<<<<< HEAD
                  value="San Francisco, CA" 
=======
                  value="Tamil Nadu, India" 
>>>>>>> 4d1d2db (Initial commit)
                />
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mt-8 mb-6">Connect With Me</h3>
            <div className="flex gap-4">
              <SocialButton 
                icon={<Github className="h-5 w-5" />} 
<<<<<<< HEAD
                href="https://github.com/yourusername" 
              />
              <SocialButton 
                icon={<Linkedin className="h-5 w-5" />} 
                href="https://linkedin.com/in/yourusername" 
              />
              <SocialButton 
                icon={<Twitter className="h-5 w-5" />} 
                href="https://twitter.com/yourusername" 
=======
                href="https://github.com/sanskarkesari" 
              />
              <SocialButton 
                icon={<Linkedin className="h-5 w-5" />} 
                href="https://www.linkedin.com/in/sanskar-kesari-3b199924b/" 
              />
              <SocialButton 
                icon={<Instagram className="h-5 w-5" />} 
                href="https://www.instagram.com/s_a_n_s.20/" 
>>>>>>> 4d1d2db (Initial commit)
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me A Message</h3>
<<<<<<< HEAD
            <p className="mb-4 text-muted-foreground">
              Since this is a frontend-only portfolio, there's no backend to process forms.
              Please use one of the contact methods on the left to get in touch.
            </p>
=======
            
>>>>>>> 4d1d2db (Initial commit)
            <Card className="bg-portfolio-50 border-portfolio-200">
              <CardContent className="p-6">
                <p className="font-medium text-portfolio-700">Email me directly:</p>
                <div className="flex items-center mt-2 gap-2">
                  <Button variant="default" asChild>
<<<<<<< HEAD
                    <a href="mailto:your.email@example.com">
                      <Mail className="mr-2 h-4 w-4" />
                      your.email@example.com
                    </a>
                  </Button>
                  <Button variant="outline" onClick={() => {
                    navigator.clipboard.writeText("your.email@example.com");
=======
                    <a href="mailto:sanskar4368@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      sanskar4368@gmail.com
                    </a>
                  </Button>
                  <Button variant="outline" onClick={() => {
                    navigator.clipboard.writeText("sanskar4368@gmail.com");
>>>>>>> 4d1d2db (Initial commit)
                    alert("Email copied to clipboard!");
                  }}>
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
