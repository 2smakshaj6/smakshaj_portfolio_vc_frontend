import axios from 'axios';

// Get backend URL from environment
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
const API_BASE_URL = `${BACKEND_URL}/api`;

console.log('🔗 Backend URL:', BACKEND_URL);
console.log('🔗 API Base URL:', API_BASE_URL);

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // Reduced timeout
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false // Disable credentials for CORS
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} from ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      data: error.response?.data
    });
    
    // Handle common error scenarios
    if (error.response?.status === 404) {
      console.warn('📝 Resource not found - this might be expected for first-time setup');
    } else if (error.response?.status === 500) {
      console.error('🔥 Server error occurred');
    } else if (!error.response) {
      console.error('🌐 Network error - unable to connect to server');
    }
    
    return Promise.reject(error);
  }
);

// API service class
class PortfolioAPI {
  constructor() {
    this.userId = 'akshaj'; // Default user ID
  }

  // Initialize data - seed database if needed
  async initializeData() {
    try {
      const response = await api.post('/seed-data');
      console.log('Database seeded:', response.data);
      return response.data;
    } catch (error) {
      if (error.response?.status === 200) {
        // Data already exists, which is fine
        return error.response.data;
      }
      console.error('Error seeding data:', error);
      throw error;
    }
  }

  // Get complete portfolio data
  async getPortfolio(userId = this.userId) {
    try {
      const response = await api.get(`/portfolio/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      throw error;
    }
  }

  // Update portfolio basic info
  async updatePortfolio(userId = this.userId, data) {
    try {
      const response = await api.put(`/portfolio/${userId}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating portfolio:', error);
      throw error;
    }
  }

  // Experience endpoints
  async getExperience(userId = this.userId) {
    try {
      const response = await api.get(`/portfolio/${userId}/experience`);
      return response.data;
    } catch (error) {
      console.error('Error fetching experience:', error);
      throw error;
    }
  }

  async createExperience(userId = this.userId, data) {
    try {
      const response = await api.post(`/portfolio/${userId}/experience`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating experience:', error);
      throw error;
    }
  }

  async updateExperience(userId = this.userId, experienceId, data) {
    try {
      const response = await api.put(`/portfolio/${userId}/experience/${experienceId}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating experience:', error);
      throw error;
    }
  }

  async deleteExperience(userId = this.userId, experienceId) {
    try {
      const response = await api.delete(`/portfolio/${userId}/experience/${experienceId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting experience:', error);
      throw error;
    }
  }

  // Project endpoints
  async getProjects(userId = this.userId) {
    try {
      const response = await api.get(`/portfolio/${userId}/projects`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  }

  async createProject(userId = this.userId, data) {
    try {
      const response = await api.post(`/portfolio/${userId}/projects`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  }

  async updateProject(userId = this.userId, projectId, data) {
    try {
      const response = await api.put(`/portfolio/${userId}/projects/${projectId}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  }

  async deleteProject(userId = this.userId, projectId) {
    try {
      const response = await api.delete(`/portfolio/${userId}/projects/${projectId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  }

  // Skill endpoints
  async getSkills(userId = this.userId) {
    try {
      const response = await api.get(`/portfolio/${userId}/skills`);
      return response.data;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw error;
    }
  }

  async createSkill(userId = this.userId, data) {
    try {
      const response = await api.post(`/portfolio/${userId}/skills`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating skill:', error);
      throw error;
    }
  }

  async updateSkill(userId = this.userId, skillId, data) {
    try {
      const response = await api.put(`/portfolio/${userId}/skills/${skillId}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating skill:', error);
      throw error;
    }
  }

  async deleteSkill(userId = this.userId, skillId) {
    try {
      const response = await api.delete(`/portfolio/${userId}/skills/${skillId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting skill:', error);
      throw error;
    }
  }

  // Education endpoints
  async getEducation(userId = this.userId) {
    try {
      const response = await api.get(`/portfolio/${userId}/education`);
      return response.data;
    } catch (error) {
      console.error('Error fetching education:', error);
      throw error;
    }
  }

  async createEducation(userId = this.userId, data) {
    try {
      const response = await api.post(`/portfolio/${userId}/education`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating education:', error);
      throw error;
    }
  }

  // Certification endpoints
  async getCertifications(userId = this.userId) {
    try {
      const response = await api.get(`/portfolio/${userId}/certifications`);
      return response.data;
    } catch (error) {
      console.error('Error fetching certifications:', error);
      throw error;
    }
  }

  async createCertification(userId = this.userId, data) {
    try {
      const response = await api.post(`/portfolio/${userId}/certifications`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating certification:', error);
      throw error;
    }
  }
}

// Create and export API instance
const portfolioAPI = new PortfolioAPI();
export default portfolioAPI;