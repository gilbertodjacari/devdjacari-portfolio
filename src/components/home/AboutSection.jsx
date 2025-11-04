import React from "react";
import { Badge } from "@/components/ui/badge";




export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sobre Mim
              </h2>
              <div className="w-24 h-1.5 accent-gradient rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Olá!Sou <strong className="accent-color">Gilberto Djacari</strong> , desenvolvedor Backend especializado em Python/Django, com mais de 2 anos de experiência na Appsho.pt.
                Tenho formação de base em Engenharia Informática e Licenciatura em Ciências da Comunicação.
                No momento, estou a expandir os meus conhecimentos em Cloud e DevOps com um curso de Docker e DevOps na (Udemy) e a desenvolver habilidades Full-Stack com o curso Meta Full-Stack Developer (Coursera).
                
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Tecnologias Principais</h3>
              <div className="flex flex-wrap gap-3">
                {["Python", "Django e DRF", "Flask","FastApi", "React"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 border border-gray-700 hover:accent-bg hover:text-white transition-colors duration-300 cursor-pointer text-sm px-3 py-1 font-medium">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-30"></div>

            <div className="relative p-2 rounded-full backdrop-blur-sm border max-w-xs w-full overflow-hidden">
              <img
                src="/ft-gil2025.png"
                alt="Foto Gil 2025"
                className="mix-blend-screen rounded-full object-contain w-full h-full"
              />

            </div>
          </div>


        </div>
      </div>
    </section>
  );
}