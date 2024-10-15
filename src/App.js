// src/App.js
import React from 'react';
import WallpaperGallery from './components/WallpaperGallery';
import './App.css'; // Puedes definir estilos adicionales en este archivo

function App() {
  return (
    <div className="App">
      <h1>Wallpaper Manager</h1>
      <WallpaperGallery />
    </div>
  );
}

export default App;
