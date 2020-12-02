// Question: https://adventofcode.com/2020/day/2

import { readFileSync } from "fs";

export function findValidPasswords() {
  const policies = readPasswordPolicies();

  const validPasswordsPart1 = policies
    .map((policy) => ({
      ...policy,
      charCount: [...policy.pass].reduce(
        (count, curr) => (curr === policy.char ? ++count : count),
        0
      ),
    }))
    .filter(
      (policy) =>
        policy.low <= policy.charCount && policy.charCount <= policy.high
    );
  console.log(`Day 2. Part 1: ${validPasswordsPart1.length}`);

  const validPasswordsPart2 = policies.filter(
    (policy) =>
      (policy.pass[policy.low - 1] === policy.char) ^
      (policy.pass[policy.high - 1] === policy.char)
  );
  console.log(`Day 2. Part 2: ${validPasswordsPart2.length}`);
}

/**
 * @returns { { low: number, high: number, char: string, pass: string}[] }
 */
function readPasswordPolicies() {
  return readFileSync("./2020/day2.txt", "ascii")
    .split(/\r?\n/)
    .map((line) =>
      line.match(/^(?<low>\d+)-(?<high>\d+) (?<char>\w): (?<pass>.*)$/)
    )
    .map((match) => ({
      low: match.groups["low"],
      high: match.groups["high"],
      char: match.groups["char"],
      pass: match.groups["pass"],
    }));
}
