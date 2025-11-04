import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Download, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const headerOffset = 80; // altura do header fixo, ajuste se necessário
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "#"; // Coloque aqui o link real do seu CV
    link.download = "Gilberto_Djacari_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="starfield">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"><br /><br /><br /><br /><br />
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          Olá, eu sou
          <span className="block accent-gradient-text animate-pulse">
            Gilberto Djacari
          </span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-6 animate-slide-up delay-200">
          Engenheiro Informático
        </div>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-500 mb-8">
          Desenvolvedor backend com foco em Python, especializado em Django e Flask.
          Experiência em criação de APIs RESTful, integração de serviços, automação de processos e desenvolvimento de aplicações web performáticas e seguras.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-slide-up delay-700">
          
          <a href="https://www.linkedin.com/in/gilberto-duarte-djacari-aa48bb237%0A" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F55139] transition-all duration-300 transform hover:scale-110">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/devdjacari?igsh=cmR2bzdxd3RleXU5&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#F55139] transition-all duration-300 transform hover:scale-110">
            <Instagram className="w-8 h-8" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up delay-1000">
          
          {/* Botão Saiba Mais */}
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="group relative overflow-hidden accent-gradient hover:opacity-90 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl font-semibold min-w-[200px] flex items-center justify-center"
          >
            <span className="relative z-10">Saiba Mais</span>
            <span className="absolute top-0 -left-full w-full h-full bg-white/20 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
          </Button>

          {/* Botão Baixar CV */}
          <a
            href="/gilberto-djacari-cv-atualizado.pdf"
            download
            className="group relative overflow-hidden border-2 accent-border bg-transparent text-white hover:text-black px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 font-semibold shadow-xl hover:shadow-[#F55139]/25 flex items-center justify-center min-w-[200px]"
          >
            <span className="absolute inset-0 accent-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></span>
            <span className="relative z-10 flex items-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Baixar CV
            </span>
          </a>

        </div>
      </div>

      {/* Scroll Indicator fixo no bottom */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-[#F55139] transition-colors duration-300 animate-bounce"
        aria-label="Ir para seção Sobre"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Estilos das estrelas e animações */}
      <style>{`
        .starfield { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .star { position: absolute; width: 2px; height: 2px; background: #F55139; border-radius: 50%; animation: twinkle linear infinite; }
        @keyframes twinkle { 0%,100% { opacity:0; transform:scale(0.5); } 50% { opacity:1; transform:scale(1); } }
        @keyframes fade-in { from{opacity:0;transform:translateY(30px);} to{opacity:1;transform:translateY(0);} }
        @keyframes slide-up { from{opacity:0;transform:translateY(50px);} to{opacity:1;transform:translateY(0);} }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 1s ease-out; animation-fill-mode: both; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}
