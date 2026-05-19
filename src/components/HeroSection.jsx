import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/projects/pic1v2.jpg')" }}
> 
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm  Sarsha</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I’m a 3rd-year Software Engineering student and React developer focused on building clean, responsive, and engaging front-end experiences. I enjoy turning ideas into functional, user-friendly interfaces and continuously growing my skills through real-world projects and hands-on learning.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
