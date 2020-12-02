// Question: https://adventofcode.com/2020/day/1

import { readFileSync } from "fs";

export function repairReport() {
  const numbers = readFileSync("2020/day1.txt", "ascii")
    .split(/\r?\n/)
    .map((line) => parseInt(line, 10));

  const part1 = twoMatchingNumbers(numbers);
  console.log(`Day 1. Part 1: ${part1}`);

  const part2 = threeMatchingNumbers(numbers);
  console.log(`Day 1. Part 2: ${part2}`);
}

function twoMatchingNumbers(numbers, target = 2020) {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const a = numbers[i];
    if (a > target) {
      continue;
    }
    let b = map.get(a);
    if (b) {
      return a * b;
    } else {
      b = target - a;
      map.set(b, a);
    }
  }
}

function threeMatchingNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const a = numbers[i];
    const bTimesC = twoMatchingNumbers(
      numbers.filter((n) => n !== a),
      2020 - a
    );
    if (bTimesC) {
      return a * bTimesC;
    }
  }
}
