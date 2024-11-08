"use client";
import { useState } from "react";


const themes = [
  { background: '#ff0000' }, // Merah
  { background: '#ffffff' }, // Putih
  { background: '#808080' }, // Abu-abu
  { background: '#0000ff' }, // Biru
  { background: '#FFFF00' }  // Kuning
];

export default function FavColor() {
  const [themeIndex, setThemeIndex] = useState(0);

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <div
      className="container mx-auto p-3 text-center"
      style={{ background: themes[themeIndex].background,
              borderRadius: '20px',
              border: '3px solid white'
      }}
    >
      <button
  className="hover:bg-gray-700 text-white py-2 px-1 rounded"
  style={{ backgroundColor: 'transparent' }} // Latar belakang transparan
  onClick={toggleTheme}
>
  <h1 className="text-black" style={{ fontFamily: 'Southern' }}> {themeIndex + 1}</h1>
</button>

    </div>
  );
}