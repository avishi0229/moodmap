# 🌍 MoodMap

**MoodMap** is a smart, mood-based restaurant and cafe discovery web app that helps users find the perfect place to eat based on their current vibe — whether it's for work, a date, a quick bite, or a budget-friendly meal.

It uses real-world map data to show nearby places on an interactive map and in a list view, with smart fallback search to always return results.

---

## 🚀 Live Demo
https://6964c5039b1d4b416a83b7db--moodmap-finder.netlify.app/app


---

## ✨ Features

- 🧠 Mood-based place recommendations (Work, Date, Quick Bite, Budget, etc.)
- 🗺️ Interactive map view using Leaflet + OpenStreetMap
- 📋 List view for easy browsing
- ❤️ Save favorite places (persisted in local storage)
- 🔍 Search & filter places by name
- 📏 Adjustable search radius
- 🌗 Light / Dark mode
- 🔁 Smart fallback search if no results found
- 📍 Uses real-time user location
- 💾 Remembers last search and favorites

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Maps:** Leaflet, OpenStreetMap
- **API:** Overpass API
- **Routing:** React Router
- **Styling:** Inline styles (custom UI)
- **State Management:** React Hooks
- **Storage:** LocalStorage

---



## ⚙️ How It Works

1. Gets user's location using browser geolocation API
2. Calls Overpass API to find nearby places based on selected mood
3. Cleans, deduplicates, and ranks results
4. Shows results on:
   - 🗺️ Map View
   - 📋 List View
5. Allows:
   - Saving favorites
   - Searching
   - Changing radius
   - Switching theme

---


