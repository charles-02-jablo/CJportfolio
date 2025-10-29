import { Code, FileCode, Globe, Terminal, Layout } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Bio Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            I'm a <span className="text-primary font-semibold">third-year IT student</span> 
            at Western Institute of Technology with a passion for web development and problem-solving.
            I have a solid foundation in <strong>Python, JavaScript, React, HTML,</strong> and <strong>CSS</strong>.
            My goal is to continue learning and building creative, functional, and user-friendly websites.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="#"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right - Skill Cards */}
        <div className="grid grid-cols-2 gap-6">
          <div className="gradient-border p-6 rounded-lg shadow-sm card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Python</h4>
                <p className="text-muted-foreground text-sm">
                  Basic understanding of Python for scripting and automation.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 rounded-lg shadow-sm card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <FileCode className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">JavaScript</h4>
                <p className="text-muted-foreground text-sm">
                  Building interactive and dynamic web functionality.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 rounded-lg shadow-sm card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">React</h4>
                <p className="text-muted-foreground text-sm">
                  Developing responsive and modular web interfaces.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 rounded-lg shadow-sm card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">HTML & CSS</h4>
                <p className="text-muted-foreground text-sm">
                  Crafting structured layouts and visually appealing designs.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
