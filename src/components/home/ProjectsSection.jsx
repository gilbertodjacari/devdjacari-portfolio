import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }) => {
  const handleCardClick = () => {
    if (project.project_url) {
      window.open(project.project_url, "_blank");
    }
  };

  return (
    <div
      className="h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <Card className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-[#F55139]/50 transition-all duration-300 h-full">
        <div className="absolute -inset-px accent-gradient rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
        <div className="relative bg-[#111] rounded-2xl h-full flex flex-col">
          <div className="relative overflow-hidden h-56">
            <img
              src={
                project.image_url ||
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2340&auto=format&fit=crop"
              }
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <CardContent className="p-6 flex flex-col flex-grow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-white group-hover:accent-color transition-colors duration-300">
                {project.title}
              </h3>
              {project.featured && (
                <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30">
                  Destaque
                </Badge>
              )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies?.slice(0, 3).map((tech, index) => (
                <Badge
                  key={`${project.id}-${tech}-${index}`} // chave única
                  variant="secondary"
                  className="bg-gray-800 text-gray-300 border-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-gray-800 flex justify-end items-center">
              <div className="flex gap-2">
                {project.project_url && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // previne onClick do card
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#F55139] hover:text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // previne onClick do card
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-white hover:text-black transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default function ProjectsSection({ projects, isLoading }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "web", "apis", "design"];
  const categoryLabels = { all: "Todos", web: "Web", apis: "API's", design: "Design" };
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meus Projetos</h2>
          <div className="w-24 h-1.5 accent-gradient rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore alguns dos meus trabalhos mais recentes e projetos em destaque
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 text-base ${
                selectedCategory === category
                  ? "accent-bg text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={`skeleton-${index}`}
                    className="h-96 w-full bg-gray-800 rounded-2xl"
                  />
                ))
            : filteredProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.id}-${index}-${project.title}`} // chave única
                  project={project}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
