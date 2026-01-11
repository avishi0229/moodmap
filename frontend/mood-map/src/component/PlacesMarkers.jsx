import { Marker, Popup } from "react-leaflet";

export default function PlacesMarkers({ places, onSelect }) {
  return (
    <>
      {places.map((p) => (
        <Marker
          key={p.id}
          position={[p.lat, p.lon]}
          eventHandlers={{
            click: () => onSelect(p)
          }}
        >
          <Popup>
            <strong>{p.name}</strong>
            <br />
            Click for details
          </Popup>
        </Marker>
      ))}
    </>
  );
}
