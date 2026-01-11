export function rankPlaces(places, mood) {
  const priorityMap = {
    work: ["cafe", "restaurant"],
    date: ["restaurant", "cafe"],
    quick: ["fast_food", "restaurant"],
    budget: ["fast_food", "cafe", "restaurant"]
  };

  const priorities = priorityMap[mood] || [];

  return [...places].sort((a, b) => {
    const aP = priorities.indexOf(a.type);
    const bP = priorities.indexOf(b.type);

    if (aP !== bP) return aP - bP;
    return a.distance - b.distance;
  });
}
