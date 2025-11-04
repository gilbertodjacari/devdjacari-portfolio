// Configuração da API
export const API_CONFIG = {
  // Para desenvolvimento local, use:
  // BASE_URL: 'http://localhost:8000/api'
  
  // Para produção, substitua pela URL da sua API FastAPI:
  BASE_URL: 'https://sua-api-fastapi.com/api',
  
  // Endpoints
  ENDPOINTS: {
    PROJECTS: '/projects',
    SKILLS: '/skills', 
    CONTACT: '/contact',
    UPLOAD: '/upload'
  }
};

// Classe para gerenciar chamadas à API
export class ApiService {
  static async request(endpoint, options = {}) {
    const url = `${API_CONFIG.BASE_URL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = { ...defaultOptions, ...options };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Projects
  static async getProjects() {
    return this.request(API_CONFIG.ENDPOINTS.PROJECTS);
  }

  static async createProject(projectData) {
    return this.request(API_CONFIG.ENDPOINTS.PROJECTS, {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  // Skills
  static async getSkills() {
    return this.request(API_CONFIG.ENDPOINTS.SKILLS);
  }

  static async createSkill(skillData) {
    return this.request(API_CONFIG.ENDPOINTS.SKILLS, {
      method: 'POST',
      body: JSON.stringify(skillData),
    });
  }

  // Contact
  static async submitContact(contactData) {
    return this.request(API_CONFIG.ENDPOINTS.CONTACT, {
      method: 'POST',
      body: JSON.stringify(contactData),
    });
  }

  // File upload
  static async uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
    
    return this.request(API_CONFIG.ENDPOINTS.UPLOAD, {
      method: 'POST',
      body: formData,
      headers: {}, // Remove Content-Type para FormData
    });
  }
}