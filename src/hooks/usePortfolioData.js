import { useState, useEffect } from 'react';
import portfolioAPI from '../services/api';
import { mockData } from '../mock';

export const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialized, setInitialized] = useState(false);

  const loadPortfolioData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Initialize data if not already done
      if (!initialized) {
        try {
          await portfolioAPI.initializeData();
          setInitialized(true);
        } catch (initError) {
          console.warn('Data initialization failed, but continuing...', initError);
          setInitialized(true); // Continue even if init fails
        }
      }

      // Fetch complete portfolio data
      const data = await portfolioAPI.getPortfolio();
      
      // Transform backend data to frontend format
      const transformedData = {
        stats: data.portfolio?.stats || mockData.stats,
        experience: data.experience || mockData.experience,
        projects: data.projects || mockData.projects,
        skills: data.skills || mockData.skills,
        education: data.education || mockData.education,
        certifications: data.certifications || mockData.certifications,
        personalInfo: data.portfolio?.personalInfo || {}
      };

      setPortfolioData(transformedData);
    } catch (err) {
      console.error('Error loading portfolio data, falling back to mock data:', err);
      
      // Fallback to mock data if API fails
      setPortfolioData({
        stats: mockData.stats,
        experience: mockData.experience,
        projects: mockData.projects,
        skills: mockData.skills,
        education: mockData.education,
        certifications: mockData.certifications,
        personalInfo: {
          name: "Akshaj Shivara Madhusudhan",
          title: "Building Safer Systems at the Intersection of Cybersecurity & AI",
          bio: "I'm a cybersecurity professional passionate about building safer digital ecosystems through the strategic integration of AI and traditional security practices."
        }
      });
      
      setError(null); // Clear error since we have fallback data
    } finally {
      setLoading(false);
    }
  };

  const refreshData = () => {
    loadPortfolioData();
  };

  useEffect(() => {
    loadPortfolioData();
  }, []);

  return {
    portfolioData,
    loading,
    error,
    refreshData
  };
};

// Hook for managing individual sections with CRUD operations
export const usePortfolioSection = (sectionType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      let response;
      switch (sectionType) {
        case 'experience':
          response = await portfolioAPI.getExperience();
          break;
        case 'projects':
          response = await portfolioAPI.getProjects();
          break;
        case 'skills':
          response = await portfolioAPI.getSkills();
          break;
        case 'education':
          response = await portfolioAPI.getEducation();
          break;
        case 'certifications':
          response = await portfolioAPI.getCertifications();
          break;
        default:
          throw new Error(`Unknown section type: ${sectionType}`);
      }

      setData(response);
    } catch (err) {
      console.error(`Error loading ${sectionType}:`, err);
      setError(err.message || `Failed to load ${sectionType}`);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (itemData) => {
    try {
      setError(null);
      let response;

      switch (sectionType) {
        case 'experience':
          response = await portfolioAPI.createExperience('akshaj', itemData);
          break;
        case 'projects':
          response = await portfolioAPI.createProject('akshaj', itemData);
          break;
        case 'skills':
          response = await portfolioAPI.createSkill('akshaj', itemData);
          break;
        case 'education':
          response = await portfolioAPI.createEducation('akshaj', itemData);
          break;
        case 'certifications':
          response = await portfolioAPI.createCertification('akshaj', itemData);
          break;
        default:
          throw new Error(`Unknown section type: ${sectionType}`);
      }

      // Refresh data after creation
      await loadData();
      return response;
    } catch (err) {
      console.error(`Error creating ${sectionType} item:`, err);
      setError(err.message || `Failed to create ${sectionType} item`);
      throw err;
    }
  };

  const updateItem = async (itemId, itemData) => {
    try {
      setError(null);
      let response;

      switch (sectionType) {
        case 'experience':
          response = await portfolioAPI.updateExperience('akshaj', itemId, itemData);
          break;
        case 'projects':
          response = await portfolioAPI.updateProject('akshaj', itemId, itemData);
          break;
        case 'skills':
          response = await portfolioAPI.updateSkill('akshaj', itemId, itemData);
          break;
        default:
          throw new Error(`Update not implemented for section type: ${sectionType}`);
      }

      // Refresh data after update
      await loadData();
      return response;
    } catch (err) {
      console.error(`Error updating ${sectionType} item:`, err);
      setError(err.message || `Failed to update ${sectionType} item`);
      throw err;
    }
  };

  const deleteItem = async (itemId) => {
    try {
      setError(null);

      switch (sectionType) {
        case 'experience':
          await portfolioAPI.deleteExperience('akshaj', itemId);
          break;
        case 'projects':
          await portfolioAPI.deleteProject('akshaj', itemId);
          break;
        case 'skills':
          await portfolioAPI.deleteSkill('akshaj', itemId);
          break;
        default:
          throw new Error(`Delete not implemented for section type: ${sectionType}`);
      }

      // Refresh data after deletion
      await loadData();
    } catch (err) {
      console.error(`Error deleting ${sectionType} item:`, err);
      setError(err.message || `Failed to delete ${sectionType} item`);
      throw err;
    }
  };

  useEffect(() => {
    loadData();
  }, [sectionType]);

  return {
    data,
    loading,
    error,
    loadData,
    createItem,
    updateItem,
    deleteItem
  };
};