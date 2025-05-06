<<<<<<< HEAD

=======
>>>>>>> 4d1d2db (Initial commit)
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-portfolio-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-portfolio-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block mb-4 px-3 py-1 bg-secondary text-portfolio-700 rounded-full text-sm font-medium">
<<<<<<< HEAD
              Full Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-portfolio-700">Your Name</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              I build exceptional digital experiences with a focus on performance, accessibility, and beautiful design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-500 to-portfolio-700 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 bg-background rounded-full"></div>
              <div className="absolute inset-6 bg-gradient-to-br from-portfolio-500 to-portfolio-700 rounded-full overflow-hidden animate-floating">
                {/* Replace with your actual profile image */}
                <div className="h-full w-full bg-zinc-300 flex items-center justify-center text-zinc-600">
                  <span className="text-sm">Your Photo</span>
                </div>
=======
              Data Scientist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-portfolio-700">Sanskar Kesari</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
            Professional with a knack for translating complex datasets into actionable business insights using statistical analysis, machine learning, and data visualization—think of me as a data whisperer who turns numbers into narratives, minus the crystal ball.            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              
              
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-500 to-portfolio-700 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-4 bg-background rounded-full"></div>
              <div className="absolute inset-6 bg-gradient-to-br from-portfolio-500 to-portfolio-700 rounded-full overflow-hidden animate-floating">
                <img
                  src="/profile.jpeg"
                  alt="Sanskar Kesari"
                  className="rounded-full w-full h-full object-cover border-4 border-portfolio-600 shadow-lg"
                />
>>>>>>> 4d1d2db (Initial commit)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
