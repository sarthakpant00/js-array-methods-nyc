const { bodegas, subwayLines, boroughs } = require("./data.js");

// EXERCISE 1
function runTwice(cb) {
  cb();
  cb();
}

// EXERCISE 2
function listBodegas() {
  const result = [];

  bodegas.forEach((bodega) => {
    result.push(`${bodega.name} (${bodega.borough})`);
  });

  return result;
}

// EXERCISE 3
function numberedSubwayLines() {
  const result = [];

  subwayLines.forEach((line, index) => {
    result.push(`${index + 1}. ${line.line} train`);
  });

  return result;
}

// EXERCISE 4
function bodegaNames() {
  return bodegas.map((bodega) => bodega.name);
}

// EXERCISE 5
function boroughsWithDensity() {
  return boroughs.map((borough) => {
    return {
      ...borough,
      density: Math.round(borough.population / borough.areaSqMi),
    };
  });
}

// EXERCISE 6
function totalStations() {
  return subwayLines.reduce((sum, line) => {
    return sum + line.stations;
  }, 0);
}

// EXERCISE 7
function bodegasByBorough() {
  return bodegas.reduce((acc, bodega) => {
    if (!acc[bodega.borough]) {
      acc[bodega.borough] = [];
    }

    acc[bodega.borough].push(bodega.name);

    return acc;
  }, {});
}

// STRETCH
function avgBecPrice24Hr() {
  const filtered = bodegas.filter((b) => b.open24Hours === true);

  const total = filtered.reduce((sum, b) => {
    return sum + b.baconEggCheese;
  }, 0);

  return Number((total / filtered.length).toFixed(2));
}

module.exports = {
  runTwice,
  listBodegas,
  numberedSubwayLines,
  bodegaNames,
  boroughsWithDensity,
  totalStations,
  bodegasByBorough,
  avgBecPrice24Hr,
};