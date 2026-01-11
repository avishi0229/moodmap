import { getPlaceImage } from "../utils/placeImages";

export default function ResultCard({ place, index }) {
  const image = getPlaceImage(place);

  return (
    <div className="result-card">
      <div className="result-rank">{index + 1}</div>

      <div className="result-image">
        {image ? (
          <img src={image} alt={place.name} />
        ) : (
          <div className="image-fallback">
            {place.type.toUpperCase()}
          </div>
        )}
      </div>

      <div className="result-info">
        <h3>{place.name}</h3>
        <p>
          📍 {place.distance} km · 🍽 {place.type}
        </p>
      </div>
    </div>
  );
}
