// data.js
// NYC-themed datasets used across the lab exercises.
// Don't modify these — your functions should work with this data as-is.

const bodegas = [
  { name: "Sunset Park Deli",      borough: "Brooklyn",  baconEggCheese: 5.50, hasCat: true,  open24Hours: true  },
  { name: "Tito's Grocery",        borough: "Bronx",     baconEggCheese: 4.75, hasCat: true,  open24Hours: false },
  { name: "Lucky 7 Deli",          borough: "Queens",    baconEggCheese: 6.00, hasCat: false, open24Hours: true  },
  { name: "Hamilton Heights Mart", borough: "Manhattan", baconEggCheese: 7.25, hasCat: true,  open24Hours: false },
  { name: "Bay Ridge Bodega",      borough: "Brooklyn",  baconEggCheese: 5.00, hasCat: false, open24Hours: true  },
  { name: "Fordham Express",       borough: "Bronx",     baconEggCheese: 4.50, hasCat: true,  open24Hours: true  }
];

const subwayLines = [
  { line: "A", color: "blue",   express: true,  stations: 60 },
  { line: "L", color: "gray",   express: false, stations: 24 },
  { line: "7", color: "purple", express: true,  stations: 22 },
  { line: "G", color: "green",  express: false, stations: 21 },
  { line: "N", color: "yellow", express: true,  stations: 38 },
  { line: "1", color: "red",    express: false, stations: 38 }
];

const boroughs = [
  { name: "Brooklyn",      population: 2736074, areaSqMi: 70.82 },
  { name: "Queens",        population: 2405464, areaSqMi: 108.7 },
  { name: "Manhattan",     population: 1694251, areaSqMi: 22.83 },
  { name: "Bronx",         population: 1472654, areaSqMi: 42.10 },
  { name: "Staten Island", population:  495747, areaSqMi: 58.37 }
];

module.exports = { bodegas, subwayLines, boroughs };
