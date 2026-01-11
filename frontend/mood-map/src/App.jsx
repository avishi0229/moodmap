import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import MainApp from "./pages/MainApp";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites
  useEffect(() => {
    const saved = localStorage.getItem("moodmap_favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Save favorites
  useEffect(() => {
    localStorage.setItem("moodmap_favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/app"
        element={<MainApp favorites={favorites} setFavorites={setFavorites} />}
      />
      <Route
        path="/favorites"
        element={<FavoritesPage favorites={favorites} />}
      />
    </Routes>
  );
}



