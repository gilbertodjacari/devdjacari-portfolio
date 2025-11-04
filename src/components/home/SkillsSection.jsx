import React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Code, Smartphone, Globe, Database, Palette, Settings } from "lucide-react";

const AnimatedProgress = ({ value }) => {
  return (
    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
      <div
        className="h-full accent-gradient transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default function SkillsSection({ skills, isLoading }) {
  const categoryIcons = {
    frontend: Globe,
    backend: Database,
    mobile: Smartphone,
    design: Palette,
    tools: Settings
  };

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile",
    design: "Design",
    tools: "Ferramentas"
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas Habilidades
          </h2>
          <div className="w-24 h-1.5 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Minha stack de tecnologias e o nível de proficiência em cada uma.
          </p>
        </div>

        <div className="space-y-12">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <Skeleton
                key={`skeleton-${index}`}
                className="h-96 w-full bg-gray-800 rounded-2xl"
              />
            ))
          ) : (
            Object.entries(groupedSkills).map(([category, categorySkills]) => {
              const IconComponent = categoryIcons[category] || Code;

              return (
                <div key={`category-${category}`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <IconComponent className="w-7 h-7 accent-color" />
                    <h3 className="text-2xl font-bold accent-color">
                      {categoryLabels[category] || category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill) => (
                      <Card
                        key={`${category}-${skill.id}`} // chave única
                        className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg hover:border-[#F55139]/50 transition-all duration-300"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-white">{skill.name}</h4>
                        </div>

                        {skill.description && (
                          <p className="text-sm text-gray-400 mt-2">{skill.description}</p>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
