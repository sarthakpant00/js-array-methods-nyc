# JS Array Methods Lab — NYC Edition 🗽

A hands-on lab for practicing **higher-order functions**, **callbacks**, and the JavaScript array methods **`forEach`**, **`map`**, and **`reduce`** — with a NYC twist (bodegas, subway lines, boroughs).

---

## 🎯 Learning Objectives

By the end of this lab, you should be able to:

1. Define a **higher-order function** and explain how it differs from a regular function.
2. Pass a **callback function** as an argument and invoke it from inside another function.
3. Use **`forEach`** to iterate over an array (including with the index parameter).
4. Use **`map`** to transform an array into a new array of the same length without mutating the original.
5. Use **`reduce`** to collapse an array down to a single value (a number, an object, anything).
6. **Chain** array methods together to solve a multi-step problem.

---

## 📚 Quick Reference

| Method    | Returns           | Mutates original? | Use when…                                |
|-----------|-------------------|-------------------|------------------------------------------|
| `forEach` | `undefined`       | No                | You just need to *do something* per item |
| `map`     | New array (same length) | No          | You need to *transform* each item        |
| `reduce`  | Anything you want | No                | You need to *combine* items into one value |

```js
// forEach — side effects only, no return value
[1, 2, 3].forEach((num) => console.log(num));

// map — transform into a new array
const doubled = [1, 2, 3].map((num) => num * 2); // [2, 4, 6]

// reduce — collapse to one value
const sum = [1, 2, 3].reduce((prev, next) => prev + next, 0); // 6
```

---

## 🚀 Getting Started

### 1. Fork, clone & install
First, **fork** this repo to your own GitHub account (click the **Fork** button at the top right of the GitHub page). Then clone **your fork** — not the original — and install dependencies:

```bash
git clone https://github.com/<your-username>/js-array-methods-nyc.git
cd js-array-methods-nyc
npm install
```

> Working from your own fork is what lets you push your work back to GitHub for submission. If you clone the original instead, `git push` will fail.

### 2. Open `index.js`
This is where you'll write your code. Each exercise has a function with a `// TODO` comment — your job is to replace it with working code.

### 3. Run the tests
```bash
npm test
```

You'll see a list of passing ✓ and failing ✗ tests. Keep working until they all pass.

To re-run the tests automatically every time you save a file:
```bash
npm run test:watch
```

---

## 📝 The Exercises

| #  | Topic                       | Method      | What you build                                           |
|----|-----------------------------|-------------|----------------------------------------------------------|
| 1  | Warm-up                     | callback    | `runTwice(cb)` — invokes a callback twice                |
| 2  | Iteration                   | `forEach`   | Format each bodega as `"Name (Borough)"`                 |
| 3  | Iteration with index        | `forEach`   | Numbered subway-line list                                |
| 4  | Transformation              | `map`       | Pull out just the bodega names                           |
| 5  | Transformation w/ math      | `map`       | Add a `density` field to each borough                    |
| 6  | Aggregation                 | `reduce`    | Total subway stations across all lines                   |
| 7  | Aggregation into an object  | `reduce`    | Group bodegas by borough                                 |
| ⭐ | Stretch — chain it all      | filter+map+reduce | Average BEC price across 24-hr bodegas             |

---

## 🛠 The Data

You'll work with three datasets (already provided in `data.js` — don't edit these):

- **`bodegas`** — name, borough, BEC price, has-cat, open-24-hours
- **`subwayLines`** — line letter/number, color, express flag, station count
- **`boroughs`** — name, population, area in square miles

---

## 💡 Tips & Gotchas

- **`forEach` returns `undefined`** — if you write `return arr.forEach(...)`, you'll always get `undefined`. Build a result array yourself, push to it, then return it.
- **`map` and `reduce` don't mutate** — they always give you back something new. Don't push to the original array.
- **Don't mutate objects inside `map`** — use the spread operator to make a new object: `{ ...item, newField: value }`.
- **`reduce` needs an initial value** — pass `0` for sums, `{}` for objects, `[]` for arrays. It's the second argument: `arr.reduce((prev, next) => ..., initialValue)`.
- **Use the right method for the job.** Each exercise tells you which method to use — that's part of the learning. Don't smuggle in a `for` loop where it asks for `map`.

---

## ✅ Submission

1. Make sure `npm test` shows all tests passing.
2. Commit and push your changes to **your fork**:
   ```bash
   git add .
   git commit -m "complete array methods lab"
   git push
   ```
3. **Open a pull request to the original repo.** On GitHub, go to your fork and click **Contribute → Open pull request** (or visit the original repo and click **Pull requests → New pull request → compare across forks**). Make sure the *base* is the original repo's `main` and the *compare* is your fork's `main`. Title it with your name (e.g. `Jane Doe — array methods lab`) and click **Create pull request**.
4. Submit the URL of your pull request.

Good luck! 🥪🚇
