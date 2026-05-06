// __tests__/index.test.js

const {
  runTwice,
  listBodegas,
  numberedSubwayLines,
  bodegaNames,
  boroughsWithDensity,
  totalStations,
  bodegasByBorough,
  avgBecPrice24Hr
} = require("../index.js");

const { bodegas, boroughs } = require("../data.js");

// -----------------------------------------------------
describe("Exercise 1 — runTwice (higher-order function)", () => {
  test("invokes the callback exactly two times", () => {
    const spy = jest.fn();
    runTwice(spy);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  test("works with a callback that has side effects", () => {
    let count = 0;
    runTwice(() => count++);
    expect(count).toBe(2);
  });
});

// -----------------------------------------------------
describe("Exercise 2 — listBodegas (forEach)", () => {
  test("returns an array with one entry per bodega", () => {
    expect(listBodegas()).toHaveLength(bodegas.length);
  });

  test("formats each entry as 'Name (Borough)'", () => {
    const result = listBodegas();
    expect(result[0]).toBe("Sunset Park Deli (Brooklyn)");
    expect(result[3]).toBe("Hamilton Heights Mart (Manhattan)");
  });
});

// -----------------------------------------------------
describe("Exercise 3 — numberedSubwayLines (forEach with index)", () => {
  test("numbering starts at 1, not 0", () => {
    const result = numberedSubwayLines();
    expect(result[0]).toBe("1. A train");
  });

  test("numbers all lines correctly", () => {
    expect(numberedSubwayLines()).toEqual([
      "1. A train",
      "2. L train",
      "3. 7 train",
      "4. G train",
      "5. N train",
      "6. 1 train"
    ]);
  });
});

// -----------------------------------------------------
describe("Exercise 4 — bodegaNames (map)", () => {
  test("returns an array of only the bodega names", () => {
    expect(bodegaNames()).toEqual([
      "Sunset Park Deli",
      "Tito's Grocery",
      "Lucky 7 Deli",
      "Hamilton Heights Mart",
      "Bay Ridge Bodega",
      "Fordham Express"
    ]);
  });

  test("does NOT mutate the original bodegas array", () => {
    bodegaNames();
    expect(bodegas[0]).toHaveProperty("borough");
    expect(bodegas[0].name).toBe("Sunset Park Deli");
  });
});

// -----------------------------------------------------
describe("Exercise 5 — boroughsWithDensity (map)", () => {
  test("each borough has a density property", () => {
    const result = boroughsWithDensity();
    result.forEach(b => expect(b).toHaveProperty("density"));
  });

  test("density is correctly calculated and rounded", () => {
    const result = boroughsWithDensity();
    const brooklyn = result.find(b => b.name === "Brooklyn");
    expect(brooklyn.density).toBe(Math.round(2736074 / 70.82));
  });

  test("does NOT mutate the original boroughs array", () => {
    boroughsWithDensity();
    expect(boroughs[0]).not.toHaveProperty("density");
  });
});

// -----------------------------------------------------
describe("Exercise 6 — totalStations (reduce)", () => {
  test("sums all station counts to a single number", () => {
    // 60 + 24 + 22 + 21 + 38 + 38 = 203
    expect(totalStations()).toBe(203);
  });

  test("returns a number, not an array", () => {
    expect(typeof totalStations()).toBe("number");
  });
});

// -----------------------------------------------------
describe("Exercise 7 — bodegasByBorough (reduce)", () => {
  test("returns an object keyed by borough name", () => {
    const result = bodegasByBorough();
    expect(result).toHaveProperty("Brooklyn");
    expect(result).toHaveProperty("Bronx");
    expect(result).toHaveProperty("Queens");
    expect(result).toHaveProperty("Manhattan");
  });

  test("each value is an array of bodega names from that borough", () => {
    const result = bodegasByBorough();
    expect(result.Brooklyn).toEqual(
      expect.arrayContaining(["Sunset Park Deli", "Bay Ridge Bodega"])
    );
    expect(result.Brooklyn).toHaveLength(2);
    expect(result.Manhattan).toEqual(["Hamilton Heights Mart"]);
  });
});

// -----------------------------------------------------
describe("Stretch — avgBecPrice24Hr (chained methods)", () => {
  test("returns the average BEC price across 24-hour bodegas, rounded to 2 decimals", () => {
    // 24-hr bodegas: Sunset Park Deli (5.50), Lucky 7 Deli (6.00),
    // Bay Ridge Bodega (5.00), Fordham Express (4.50)
    // Avg = (5.50 + 6.00 + 5.00 + 4.50) / 4 = 5.25
    expect(avgBecPrice24Hr()).toBe(5.25);
  });
});
