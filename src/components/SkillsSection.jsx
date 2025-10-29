import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML / CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Python", category: "backend" },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-sm border border-border card-hover"
            >
              <h3 className="font-semibold text-lg text-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
