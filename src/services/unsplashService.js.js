// src/services/unsplashService.js
import axios from 'axios';

// Aquí pones tu API Key de Unsplash
const API_KEY = 'G68TI31dsokLJft6rAjS2RMkctEOrhB8GqUSsPqqe3A';
const BASE_URL = 'https://api.unsplash.com';

export const getWallpapers = async (query = 'wallpapers') => {
  try {
    const response = await axios.get(`${BASE_URL}/search/photos`, {
      params: { query, per_page: 15 },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching wallpapers from Unsplash:', error);
    return [];
  }
};
