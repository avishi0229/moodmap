import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../component/TopBar";
import SearchPanel from "../component/SearchPanel";
import ViewToggle from "../component/ViewToggle";
import ResultsSection from "../component/ResultsSection";

import MoodSelector from "../component/MoodSelector";

import { fetchPlaces } from "../utils/fetchPlaces";
import { moodConfig } from "../utils/moodConfig";
import { getDistance } from "../utils/distance";
import { rankPlaces } from "../utils/rankPlaces";

import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

// ================= UTIL =================
function deduplicatePlaces(places) {
  const result = [];

  for (const p of places) {
    const exists = result.find((r) => {
      if (r.name !== p.name) return false;
      const dLat = r.lat - p.lat;
      const dLon = r.lon - p.lon;
      return Math.sqrt(dLat * dLat + dLon * dLon) < 0.0005; // ~50m
    });

    if (!exists) result.push(p);
  }

  return result;
}

// ================= MAIN APP =================
export default function MainApp({ favorites, setFavorites }) {
  const navigate = useNavigate();

  const [position, setPosition] = useState(null);
  const [mood, setMood] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [noResultsMsg, setNoResultsMsg] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [radius, setRadius] = useState(3000);
  const [viewMode, setViewMode] = useState("map");
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");

  // Theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("moodmap_theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("moodmap_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((p) => (p === "light" ? "dark" : "light"));
  };

  // Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      () => alert("Location access denied")
    );
  }, []);

  // Toggle favorite
  const toggleFavorite = (place) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.id === place.id);
      return exists
        ? prev.filter((p) => p.id !== place.id)
        : [...prev, place];
    });
  };

  // Fetcher with fallback
  const tryFetchWithFallback = async (lat, lon, baseAmenities, radius) => {
    let raw = await fetchPlaces(lat, lon, baseAmenities, radius);
    if (raw?.length) return { raw, used: baseAmenities };

    raw = await fetchPlaces(lat, lon, ["restaurant"], radius);
    if (raw?.length) return { raw, used: ["restaurant"] };

    raw = await fetchPlaces(lat, lon, ["fast_food"], radius);
    if (raw?.length) return { raw, used: ["fast_food"] };

    return { raw: [], used: null };
  };

  // Fetch places
  useEffect(() => {
    if (!mood || !position) return;

    const loadPlaces = async () => {
      setLoading(true);
      setPlaces([]);
      setSelectedPlace(null);
      setNoResultsMsg("");
      setInfoMsg("");

      try {
        const { raw, used } = await tryFetchWithFallback(
          position[0],
          position[1],
          moodConfig[mood],
          radius
        );

        const cleaned = raw
          .map((p) => {
            const lat = p.lat || p.center?.lat;
            const lon = p.lon || p.center?.lon;
            if (!lat || !lon) return null;

            return {
              id: p.id,
              name: p.tags?.name || "Unnamed place",
              lat,
              lon,
              type: p.tags?.amenity || "unknown",
              distance: Number(getDistance(position[0], position[1], lat, lon)),
              tags: p.tags
            };
          })
          .filter(Boolean);

        const unique = deduplicatePlaces(cleaned);
        const ranked = rankPlaces(unique, mood);

        if (ranked.length === 0) {
          setNoResultsMsg("❌ No places found in this area");
          setPlaces([]);
        } else {
          if (
            used &&
            JSON.stringify(used) !== JSON.stringify(moodConfig[mood])
          ) {
            setInfoMsg(
              `ℹ️ Showing "${used[0]}" because no "${moodConfig[mood].join(
                ", "
              )}" were found nearby.`
            );
          }

          setPlaces(ranked);
        }
      } catch (err) {
        console.error(err);
        setNoResultsMsg("❌ Failed to load nearby places");
      }

      setLoading(false);
    };

    loadPlaces();
  }, [mood, position, radius]);

  if (!position) return <p>Getting your location...</p>;

  const filteredPlaces = places.filter((p) =>
    p.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`app-container ${theme}`}>
      <TopBar
        theme={theme}
        toggleTheme={toggleTheme}
        navigate={navigate}
        sunIcon={sunIcon}
        moonIcon={moonIcon}
      />

      <MoodSelector selectedMood={mood} onSelect={setMood} theme={theme} />

      <SearchPanel
        theme={theme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        radius={radius}
        setRadius={setRadius}
      />

      <ViewToggle
        theme={theme}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <ResultsSection
        theme={theme}
        loading={loading}
        infoMsg={infoMsg}
        noResultsMsg={noResultsMsg}
        selectedPlace={selectedPlace}
        setSelectedPlace={setSelectedPlace}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        viewMode={viewMode}
        filteredPlaces={filteredPlaces}
        position={position}
      />
    </div>
  );
}
