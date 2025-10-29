import { ArrowDown } from "lucide-react";
import profilePic from "../assets/CJ.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">
        {/* 👇 Add your picture here */}
        <img
          src={profilePic}
          alt="Charles Vincent Jablo"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover shadow-lg border-4 border-primary mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Charles Vincent Jablo
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Everyone will judge you, but yourself is important.
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            My Projects
          </a>
        </div>
      </div>

      {/* 👇 "See More" button at bottom */}
      <div className="absolute bottom-10 text-center">
        <div
          className="see-more-box cursor-pointer hover:text-primary transition"
          onClick={() =>
            document.getElementById("about").scrollIntoView({ behavior: "smooth" })
          }
        >
          See More ↓
        </div>
      </div>
    </section>
  );
};
