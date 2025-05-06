
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-portfolio-700">Sanskar Kesari</h3>
            <p className="text-muted-foreground mt-2">Data Scientist</p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/sanskarkesari" target="_blank" rel="noopener noreferrer" 
               className="text-foreground/80 hover:text-portfolio-600 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/sanskar-kesari-3b199924b/" target="_blank" rel="noopener noreferrer"
               className="text-foreground/80 hover:text-portfolio-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/s_a_n_s.20/" target="_blank" rel="noopener noreferrer"
               className="text-foreground/80 hover:text-portfolio-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <hr className="my-6 border-foreground/10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {year} Sanskar Kesari. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-portfolio-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-portfolio-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
