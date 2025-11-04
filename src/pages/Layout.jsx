

import React from "react";
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const navigationItems = [
  { title: "Início", url: "#home", icon: Home, href: createPageUrl("Home") },
  { title: "Sobre", url: "#about", icon: User },
  { title: "Projetos", url: "#projects", icon: Briefcase },
  { title: "Habilidades", url: "#skills", icon: Code },
  { title: "Contato", url: "#contact", icon: Mail },
];

export default function Layout({ children, currentPageName }) {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Melhor detecção de seções
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 150; // Offset ajustado
      
      let currentSection = "home";
      
      // Se estamos no topo da página, sempre ativar "home"
      if (window.scrollY < 100) {
        currentSection = "home";
      } else {
        // Procurar qual seção está visível
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
          }
        });
      }
      
      setActiveSection(currentSection);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Account for fixed header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (item) => {
    const sectionId = item.url.replace("#", "");
    
    // Definir imediatamente como ativo quando clicado
    setActiveSection(sectionId);
    
    if (item.url.startsWith("#")) {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#111] text-gray-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .accent-color {
          color: #F55139;
        }
        
        .accent-bg {
          background-color: #F55139;
        }
        
        .accent-border {
          border-color: #F55139;
        }
        
        .accent-gradient {
          background: linear-gradient(135deg, #F55139 0%, #ff6b47 100%);
        }
        
        .accent-gradient-text {
          background: linear-gradient(135deg, #F55139 0%, #ff6b47 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div style={{ width: `${scrollProgress}%` }} className="h-full accent-gradient transition-all duration-300"></div>
      </div>
    
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-gray-800" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("home")}
                className="text-3xl font-bold accent-gradient-text hover:scale-105 transition-transform duration-300"
              >
                Gilberto Djacari
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const sectionId = item.url.replace("#", "");
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.title}
                    onClick={() => handleNavigation(item)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.title}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 accent-bg rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black/90 backdrop-blur-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => {
              const sectionId = item.url.replace("#", "");
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={item.title}
                  onClick={() => handleNavigation(item)}
                  className={`w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md flex items-center space-x-3 ${
                    isActive
                      ? "text-white bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4 accent-gradient-text">
            Gilberto Djacari
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Engenheiro Informático apaixonado por criar experiências digitais memoráveis.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
          
    
            <a href="https://www.linkedin.com/in/gilberto-duarte-djacari-aa48bb237%0A" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:accent-color transition-transform duration-300 hover:scale-125">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/devdjacari?igsh=cmR2bzdxd3RleXU5&utm_source=qr" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:accent-color transition-transform duration-300 hover:scale-125">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gilberto Djacari. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

