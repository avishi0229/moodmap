import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { userLocationIcon } from "../utils/userLocationIcon";
import PlacesMarkers from "./PlacesMarkers";

export default function MapView({
  position,
  places,
  onSelectPlace,
  favorites
}) {
  // ✅ ADD THIS GUARD
  if (!position) {
    return <div>Loading map...</div>;
  }

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* User location marker */}
      <Marker position={position} icon={userLocationIcon}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Place markers */}
      <PlacesMarkers
        places={places}
        onSelect={onSelectPlace}
        favorites={favorites}
      />
    </MapContainer>
  );
}
