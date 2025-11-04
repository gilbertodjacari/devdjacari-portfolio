import React, { useState, useEffect, useRef } from "react";
import { staticProjects, staticSkills } from "../components/data/staticData";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillsSection from "../components/home/SkillsSection";
import ContactSection from "../components/home/ContactSection";

/**
 * Custom hook para animações de scroll
 * Retorna um Set com elementos animados e função para observar novos elementos
 */
const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements((prev) => new Set(prev).add(entry.target.id));
            observer.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observer.current?.disconnect();
  }, []);

  const observe = (element) => {
    if (element && observer.current) observer.current.observe(element);
  };

  return [animatedElements, observe];
};

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [animatedElements, observe] = useScrollAnimation();

  // Simula carregamento de dados
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setProjects(staticProjects);
      setSkills(staticSkills);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Retorna a classe de animação se o elemento estiver visível
  const getAnimationClass = (id) => {
    return animatedElements.has(id) ? "animate-fade-in-up" : "opacity-0";
  };

  return (
    <div className="overflow-x-hidden">
      {/* Estilos globais de animação */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>

      {/* Seções */}
      <HeroSection />

      <section id="about" ref={observe} className={getAnimationClass("about")}>
        <AboutSection />
      </section>

      <section id="projects" ref={observe} className={getAnimationClass("projects")}>
        <ProjectsSection projects={projects} isLoading={isLoading} />
      </section>

      <section id="skills" ref={observe} className={getAnimationClass("skills")}>
        <SkillsSection skills={skills} isLoading={isLoading} />
      </section>

      <section id="contact" ref={observe} className={getAnimationClass("contact")}>
        <ContactSection />
      </section>
    </div>
  );
}
