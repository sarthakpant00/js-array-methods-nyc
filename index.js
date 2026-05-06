// index.js
// =====================================================
//  JS Array Methods Lab — NYC Edition 🗽
//  Higher-Order Functions, Callbacks, forEach, map, reduce
// =====================================================
//
// HOW THIS LAB WORKS:
// - Each exercise has a function you need to complete.
// - Replace the // TODO lines with your code.
// - Run `npm test` to check your work.
// - Use the array method named in the exercise title — that's the whole point!
//   (Don't use a `for` loop where the exercise asks for `map`.)
//
// =====================================================

const { bodegas, subwayLines, boroughs } = require("./data.js");

// =====================================================
// EXERCISE 1 — Warm-up: Higher-Order Functions & Callbacks
// =====================================================
// Write a higher-order function called `runTwice` that takes a
// callback function as an argument and INVOKES it two times.
// It should return nothing (undefined).
//
// Example:
//   runTwice(() => console.log("hello"));
//   // logs "hello"
//   // logs "hello"

function runTwice(cb) {
  // TODO: invoke cb twice
}

// =====================================================
// EXERCISE 2 — forEach: Print every bodega
// =====================================================
// Use `forEach` to loop through the `bodegas` array and return an
// array of strings in the format: "Sunset Park Deli (Brooklyn)"
//
// Hint: declare an empty array, push to it inside forEach,
// then return it at the end.
//
// Example output:
//   ["Sunset Park Deli (Brooklyn)", "Tito's Grocery (Bronx)", ...]

function listBodegas() {
  // TODO: use forEach to build and return the array
}

// =====================================================
// EXERCISE 3 — forEach with index: Numbered subway lines
// =====================================================
// Use `forEach` (with the index parameter) to return an array
// of strings like "1. A train" — numbered starting at 1, not 0.
//
// Example output:
//   ["1. A train", "2. L train", "3. 7 train", ...]

function numberedSubwayLines() {
  // TODO: use forEach with an index argument
}

// =====================================================
// EXERCISE 4 — map: Bodega names only
// =====================================================
// Use `map` to return an array of just the bodega names.
//
// Example output:
//   ["Sunset Park Deli", "Tito's Grocery", "Lucky 7 Deli", ...]

function bodegaNames() {
  // TODO: use map
}

// =====================================================
// EXERCISE 5 — map: Population density
// =====================================================
// Use `map` to return a new array of borough objects with an
// added `density` property (people per square mile, rounded
// to the nearest whole number).
//
// Example output:
//   [
//     { name: "Brooklyn", population: 2736074, areaSqMi: 70.82, density: 38634 },
//     ...
//   ]
//
// Hint: Math.round() and don't mutate the original objects —
// return new objects (spread operator `...` is your friend).

function boroughsWithDensity() {
  // TODO: use map
}

// =====================================================
// EXERCISE 6 — reduce: Total stations across all lines
// =====================================================
// Use `reduce` to return a single number: the total count of
// stations across all subway lines in the dataset.
//
// Example output:
//   203

function totalStations() {
  // TODO: use reduce
}

// =====================================================
// EXERCISE 7 — reduce: Group bodegas by borough
// =====================================================
// Use `reduce` to return an object where each key is a borough
// name and each value is an array of bodega names in that borough.
//
// Example output:
//   {
//     Brooklyn:  ["Sunset Park Deli", "Bay Ridge Bodega"],
//     Bronx:     ["Tito's Grocery", "Fordham Express"],
//     Queens:    ["Lucky 7 Deli"],
//     Manhattan: ["Hamilton Heights Mart"]
//   }
//
// Hint: the accumulator should start as an empty object `{}`.

function bodegasByBorough() {
  // TODO: use reduce
}

// =====================================================
// STRETCH — Combine all three: Average BEC price in 24-hr bodegas
// =====================================================
// Use a CHAIN of array methods (filter + map + reduce, or
// any combination) to return the average bacon-egg-and-cheese
// price across bodegas that are open 24 hours.
// Round to 2 decimal places.
//
// Example output:
//   5.25

function avgBecPrice24Hr() {
  // TODO: chain array methods
}

// =====================================================
// Don't touch below — exports for the test runner.
// =====================================================
module.exports = {
  runTwice,
  listBodegas,
  numberedSubwayLines,
  bodegaNames,
  boroughsWithDensity,
  totalStations,
  bodegasByBorough,
  avgBecPrice24Hr
};
