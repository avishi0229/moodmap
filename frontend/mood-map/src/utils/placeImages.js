// Known brand logos (free, CDN hosted)
export const brandLogos = {
  mcdonald: "https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg",
  kfc: "https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg",
  domino: "https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg",
  subway: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg"
};

// Category fallback images
export const categoryImages = {
  restaurant: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  cafe: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  fast_food: "https://images.unsplash.com/photo-1550547660-d9450f859349"
};

// Decide which image to show
export function getPlaceImage(place) {
  const name = place.name.toLowerCase();

  // 1️⃣ Brand logo
  for (const brand in brandLogos) {
    if (name.includes(brand)) {
      return brandLogos[brand];
    }
  }

  // 2️⃣ Category image
  if (categoryImages[place.type]) {
    return categoryImages[place.type];
  }

  // 3️⃣ Fallback
  return null;
}
