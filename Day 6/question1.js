const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

function cleanFlightData(rawFlights) {

  const parsed = rawFlights.map((flight) => {
    const [route, rawPrice] = flight.split(":");
    const dashIndex = route.lastIndexOf("-");
    const from = route.substring(0, dashIndex);
    const to   = route.substring(dashIndex + 1);
    const price = Number(rawPrice);
    const safePrice = isNaN(price) ? 0 : price;
    return { from, to, price: safePrice };
  });

  const filtered = parsed.filter(
    (f) => f.price >= 100 && f.price <= 500
  );

  const sorted = filtered.sort(
    (a, b) => a.price - b.price
  );

  return JSON.stringify(sorted);
}
const result = cleanFlightData(rawFlights);
console.log(result);