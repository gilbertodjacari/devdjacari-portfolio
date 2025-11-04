import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Terminal, FileCode, Globe, Rocket } from 'lucide-react';

const CodeBlock = ({ children, language = "bash" }) => (
  <div className="relative">
    <Badge variant="outline" className="absolute top-2 right-2 text-xs">
      {language}
    </Badge>
    <pre className="bg-gray-900 rounded-lg p-4 mt-2 overflow-x-auto border border-gray-700">
      <code className="text-sm text-gray-100 font-mono">{children.trim()}</code>
    </pre>
  </div>
);

export default function ExportGuide() {
  return (
    <div className="min-h-screen bg-[#111] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🚀 Guia de Exportação
          </h1>
          <p className="text-xl text-gray-400">
            Seu portfólio está pronto para ser exportado e hospedado gratuitamente!
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="setup">Configuração</TabsTrigger>
            <TabsTrigger value="customize">Personalizar</TabsTrigger>
            <TabsTrigger value="deploy">Deploy</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Projeto Finalizado
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p><strong>✅ Portfólio 100% Estático:</strong> Sem necessidade de backend ou banco de dados</p>
                <p><strong>✅ Design Responsivo:</strong> Funciona perfeitamente em desktop e mobile</p>
                <p><strong>✅ Performance Otimizada:</strong> Carregamento rápido e animações suaves</p>
                <p><strong>✅ SEO Ready:</strong> Estrutura otimizada para motores de busca</p>
                <p><strong>✅ Formulário de Contato:</strong> Abre o cliente de email automaticamente</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Estrutura do Projeto</CardTitle>
              </CardHeader>
              <CardContent>
                <CodeBlock language="text">{`
📁 seu-portfolio/
├── 📁 components/
│   ├── 📁 home/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ContactSection.jsx
│   └── 📁 data/
│       └── staticData.js ← EDITE AQUI seus projetos e habilidades
├── 📁 pages/
│   └── Home.js
├── Layout.js
└── 📄 package.json
                `}</CodeBlock>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="setup" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Configuração Inicial
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">1. Após exportar da Base44:</h4>
                  <CodeBlock>{`
# Extrair o arquivo .zip e navegar para a pasta
cd seu-portfolio

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
                  `}</CodeBlock>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">2. Estrutura típica do React exportado:</h4>
                  <CodeBlock language="json">{`
{
  "name": "portfolio-gilberto-djacari",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    // ... outras dependências
  }
}
                  `}</CodeBlock>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customize" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileCode className="w-5 h-5" />
                  Personalizações Essenciais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">📝 Editar Dados Pessoais</h4>
                  <p className="text-gray-400 mb-2">Arquivo: <code className="bg-gray-800 px-2 py-1 rounded">components/data/staticData.js</code></p>
                  <CodeBlock language="javascript">{`
export const staticProjects = [
  {
    "id": "1",
    "title": "SEU PROJETO AQUI",
    "description": "Descrição detalhada do seu projeto...",
    "image_url": "URL_DA_IMAGEM",
    "technologies": ["React", "Node.js", "..."],
    "category": "web", // web, mobile, design
    "project_url": "https://seusite.com",
    "github_url": "https://github.com/seuusuario/projeto",
    "featured": true
  }
  // Adicione mais projetos...
];

export const staticSkills = [
  { 
    "name": "SUA SKILL", 
    "level": 90, // 0-100
    "category": "frontend", // frontend, backend, mobile, design, tools
    "description": "Descrição da habilidade" 
  }
  // Adicione mais skills...
];
                  `}</CodeBlock>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">📧 Atualizar Informações de Contato</h4>
                  <p className="text-gray-400 mb-2">Arquivo: <code className="bg-gray-800 px-2 py-1 rounded">components/home/ContactSection.jsx</code></p>
                  <CodeBlock language="javascript">{`
// Linha ~40: Email para formulário
const mailtoLink = \`mailto:SEU_EMAIL@gmail.com?subject=...\`;

// Linha ~70: Informações de contato exibidas
<ContactInfoItem
  icon={Phone}
  title="Telefone"
  value="SEU_TELEFONE"
  href="tel:SEU_TELEFONE"
/>
<ContactInfoItem
  icon={Mail}
  title="Email"
  value="SEU_EMAIL@gmail.com"
  href="mailto:SEU_EMAIL@gmail.com"
/>
                  `}</CodeBlock>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">🔗 Links das Redes Sociais</h4>
                  <p className="text-gray-400 mb-2">Arquivo: <code className="bg-gray-800 px-2 py-1 rounded">components/home/HeroSection.jsx</code></p>
                  <CodeBlock language="javascript">{`
// Linha ~45: Links do Hero
<a href="https://github.com/SEUUSUARIO" target="_blank">
<a href="https://linkedin.com/in/SEUUSUARIO" target="_blank">
<a href="https://instagram.com/SEUUSUARIO" target="_blank">

// Também atualizar no Layout.js (footer)
                  `}</CodeBlock>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deploy" className="space-y-6">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Deploy Gratuito
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">🌐 Opção 1: Netlify (Recomendado)</h4>
                  <CodeBlock>{`
# 1. Fazer build do projeto
npm run build

# 2. Ir para netlify.com
# 3. Arrastar a pasta 'dist' para o Netlify
# 4. Seu site estará online em segundos!
                  `}</CodeBlock>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">⚡ Opção 2: Vercel</h4>
                  <CodeBlock>{`
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer deploy
vercel

# 3. Seguir as instruções no terminal
                  `}</CodeBlock>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">🐙 Opção 3: GitHub Pages</h4>
                  <CodeBlock>{`
# 1. Criar repositório no GitHub
# 2. Fazer push do código
# 3. Ir em Settings > Pages
# 4. Selecionar source: GitHub Actions
# 5. Configurar workflow de build automático
                  `}</CodeBlock>
                </div>

                <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
                  <h4 className="text-blue-300 font-semibold mb-2">💡 Dica Pro:</h4>
                  <p className="text-gray-300 text-sm">
                    Depois do primeiro deploy, qualquer alteração que você fizer nos dados 
                    (projetos, skills, contatos) e fazer novo upload, o site será atualizado automaticamente!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border border-green-700">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Projeto Finalizado!</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Seu portfólio profissional está completo e pronto para impressionar recrutadores e clientes. 
                  Boa sorte na sua jornada profissional! 🚀
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-600">Responsivo</Badge>
                  <Badge className="bg-blue-600">Performance Otimizada</Badge>
                  <Badge className="bg-purple-600">Deploy Gratuito</Badge>
                  <Badge className="bg-orange-600">Fácil de Atualizar</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}