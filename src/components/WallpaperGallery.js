// src/components/WallpaperGallery.js
import React, { useEffect, useState } from 'react';
import { getWallpapers } from '../services/unsplashService.js';
import './WallpaperGallery.css'; // Puedes crear un archivo CSS para estilos personalizados

const WallpaperGallery = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallpapers = async () => {
      const data = await getWallpapers();
      setWallpapers(data);
      setLoading(false);
    };

    fetchWallpapers();
  }, []);

  return (
    <div className="gallery-container">
      {loading ? (
        <p>Loading wallpapers...</p>
      ) : (
        <div className="wallpaper-grid">
          {wallpapers.map((wallpaper) => (
            <div key={wallpaper.id} className="wallpaper-item">
              <img src={wallpaper.urls.small} alt={wallpaper.alt_description} />
              <p>{wallpaper.alt_description || 'Wallpaper'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WallpaperGallery;
