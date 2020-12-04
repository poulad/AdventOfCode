// Question: https://adventofcode.com/2020/day/3

import { readFileSync } from "fs";

export function countTrees() {
  const treeLines = readTreeLines();

  const r1d1 = countTreesWithSlope(treeLines, 1, 1);
  const r3d1 = countTreesWithSlope(treeLines, 3, 1);
  const r5d1 = countTreesWithSlope(treeLines, 5, 1);
  const r7d1 = countTreesWithSlope(treeLines, 7, 1);
  const r1d2 = countTreesWithSlope(treeLines, 1, 2);

  console.log(`Day 3. Part 1: ${r3d1}`);
  console.log(`Day 3. Part 2: ${r1d1 * r3d1 * r5d1 * r7d1 * r1d2}`);
}

function countTreesWithSlope(treeLines, right, down) {
  let treesVisited = 0;
  const width = treeLines[0].length;
  let c = 0;
  for (let r = 0; r < treeLines.length - down; r += down) {
    c = (c + right) % width;
    if (treeLines[r + down][c] === "#") {
      treesVisited++;
    }
  }
  return treesVisited;
}

function readTreeLines() {
  return readFileSync("./2020/day3.txt", "ascii").split(/\r?\n/);
}
