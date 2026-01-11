import L from "leaflet";

export const userLocationIcon = L.divIcon({
  className: "user-location-icon",
  html: "📍",
  iconSize: [32, 32],
  iconAnchor: [16, 32]
});
