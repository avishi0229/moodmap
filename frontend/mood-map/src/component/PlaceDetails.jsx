export default function PlaceDetails({
  place,
  onBack,
  favorites,
  onToggleFavorite
}) {
  if (!place) {
    return (
      <div style={{ padding: "1rem" }}>
        <p>Something went wrong. No place data.</p>
        <button onClick={onBack}>← Back</button>
      </div>
    );
  }
  


  const isFav = favorites?.some((p) => p.id === place.id);

  // Safely format distance
  let distanceText = "Not available";
  if (typeof place.distance === "number") {
    distanceText = place.distance.toFixed(2) + " km";
  } else if (!isNaN(Number(place.distance))) {
    distanceText = Number(place.distance).toFixed(2) + " km";
  }
  
  const openInGoogleMaps = () => {
    if (!place?.lat || !place?.lon) {
      alert("Location not available");
      return;
    }

    const url = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lon}`;
    window.open(url, "_blank");
  };


 
  return (
    

    <div style={{ padding: "1rem" }}>
      <button onClick={onBack} style={{ marginBottom: "10px" }}>
        ← Back
      </button>

      <h2>
        {place.name || "Unnamed place"}{" "}
        <button
          onClick={() => onToggleFavorite(place)}
          style={{
            border: "none",
            background: "none",
            fontSize: "24px",
            cursor: "pointer"
          }}
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </h2>

      <p>
        <strong>Type:</strong> {place.type || "Unknown"}
      </p>

      <p>
        <strong>Distance:</strong> {distanceText}
      </p>

      <p>
        <strong>Rating:</strong>{" "}
        {place.tags?.rating ||
          place.tags?.["rating:overall"] ||
          place.tags?.stars ||
          "Not available"}
      </p>

      <p>
        <strong>Tags:</strong>{" "}
        {place.tags?.cuisine ||
          place.tags?.amenity ||
          "Not available"}
      </p>
       <div className="card">
      <button onClick={onBack}>← Back</button>

      <h2>{place.name}</h2>

      <p><b>Type:</b> {place.type}</p>
      <p><b>Distance:</b> {distanceText}</p>

      <button
        onClick={openInGoogleMaps}
        style={{
          marginTop: "12px",
          padding: "10px 16px",
          borderRadius: "10px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        🧭 Navigate with Google Maps
      </button>
    </div>
    </div>
  );
}
