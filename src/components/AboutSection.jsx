import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Passionate About Quality Websites That Perform            </h3>

            <p className="text-muted-foreground">
            I’m a soon-to-be Bachelor of IT graduate with a growing passion for front-end development. I love creating interactive, user-friendly digital experiences that not only look great but feel seamless to use. <br /><br />Currently, I’m building my skills in React and modern web technologies, always learning by doing and taking on new challenges. Outside of coding, I enjoy creative projects and exploring how technology can simplify everyday life.<br /><br />

As a front-end developer, I turn design mockups into responsive, interactive websites and provide ongoing support to keep them running at their best. Let’s work together to elevate your online presence.  </p>
            <p className="text-muted-foreground">

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> React Interface Development</h4>
                  <p className="text-muted-foreground">
                  A true lover of React, I focus on building dynamic and high-performance websites that deliver both form and function.                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Ecommerce Strategy</h4>
                  <p className="text-muted-foreground">
                  With experience in ecommerce platforms, I optimize website functionality to boost sales, streamline user journeys, and drive business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Clean Component Architecture</h4>
                  <p className="text-muted-foreground">
                  I design front-end features with clear component structure, thoughtful state management, and maintainable logic that scales as projects grow.
                                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
