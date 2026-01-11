export async function fetchPlaces(lat, lon, amenities, radiusMeters) {
  const radius = radiusMeters; // dynamic now

  const query = `
[out:json][timeout:25];
(
  ${amenities
    .map(
      (a) => `
    node["amenity"="${a}"](around:${radius},${lat},${lon});
    way["amenity"="${a}"](around:${radius},${lat},${lon});
  `
    )
    .join("")}
);
out center;
`;

  const response = await fetch(
    "https://overpass.kumi.systems/api/interpreter",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: query
    }
  );

  if (!response.ok) {
    throw new Error("Overpass API failed");
  }

  const data = await response.json();
  return data.elements;
}

