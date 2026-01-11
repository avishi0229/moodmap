import PlaceDetails from "./PlaceDetails";
import MapView from "./MapView";
import PlacesList from "./PlacesList";

export default function ResultsSection({
  theme,
  loading,
  infoMsg,
  noResultsMsg,
  selectedPlace,
  setSelectedPlace,
  favorites,
  toggleFavorite,
  viewMode,
  filteredPlaces
}) {
  return (
    <>
      {loading && (
        <div style={{
          padding: "16px 24px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #5A639C 0%, #7776B3 100%)",
          color: "white",
          fontWeight: "600",
          marginBottom: "20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(119, 118, 179, 0.3)"
        }}>
          🔍 Finding places...
        </div>
      )}

      {!loading && infoMsg && (
        <div style={{
          padding: "16px 24px",
          borderRadius: "12px",
          background: theme === "dark" ? "#1e40af" : "#dbeafe",
          color: theme === "dark" ? "#dbeafe" : "#1e40af",
          fontWeight: "500",
          marginBottom: "20px",
          border: theme === "dark" ? "1px solid #2563eb" : "1px solid #93c5fd"
        }}>
          {infoMsg}
        </div>
      )}

      {!loading && noResultsMsg && (
        <div style={{
          padding: "16px 24px",
          borderRadius: "12px",
          background: theme === "dark" ? "#7f1d1d" : "#fee2e2",
          color: theme === "dark" ? "#fecaca" : "#991b1b",
          fontWeight: "500",
          marginBottom: "20px",
          border: theme === "dark" ? "1px solid #991b1b" : "1px solid #fca5a5"
        }}>
          {noResultsMsg}
        </div>
      )}

      {/* DETAILS */}
      {selectedPlace && (
        <PlaceDetails
          place={selectedPlace}
          onBack={() => setSelectedPlace(null)}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {/* MAP */}
      {!selectedPlace && viewMode === "map" && (
        <MapView
          position={position}
          places={filteredPlaces}
          onSelectPlace={setSelectedPlace}
          favorites={favorites}
        />
      )}

      {/* LIST */}
      {!selectedPlace && viewMode === "list" && (
        <PlacesList
          places={filteredPlaces}
          favorites={favorites}
          onSelectPlace={setSelectedPlace}
        />
      )}
    </>
  );
}
