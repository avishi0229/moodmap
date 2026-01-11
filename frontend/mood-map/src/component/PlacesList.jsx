export default function PlacesList({ places, favorites, onSelectPlace }) {
  if (!places || places.length === 0) {
    return <p>No places to show.</p>;
  }

  return (
    <div className="places-list">
      {places.map((place) => {
        const isFav = favorites?.some((f) => f.id === place.id);

        let distanceText = "N/A";
        if (typeof place.distance === "number") {
          distanceText = place.distance.toFixed(2) + " km";
        }

        return (
          <div
            key={`${place.id}-${place.lat}-${place.lon}`}
            className="place-card"
            onClick={() => onSelectPlace(place)}
          >
            <div>
              <h3>
                {place.name} {isFav && "❤️"}
              </h3>
              <p>
                {place.type} • {distanceText}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
