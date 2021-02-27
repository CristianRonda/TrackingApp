export const getDistanceFromLatLonInKm = ({
  lastLatitude,
  lastLongitude,
  currentLatitude,
  currentLongitude,
}) => {
  const RADIO = 6371;
  const dLat = deg2Rad(currentLatitude - lastLatitude);
  const dLon = deg2Rad(currentLongitude - lastLongitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLon / 2) +
    Math.cos(deg2Rad(lastLatitude)) *
      Math.cos(deg2Rad(currentLatitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.asin(Math.sqrt(a));

  return Number(RADIO * c);
};

const deg2Rad = (deg) => Number((deg * Math.PI) / 180);
