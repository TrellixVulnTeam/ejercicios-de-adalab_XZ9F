"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true },
];

const whoWon = runners
  .map((runner) => runner.name)
  .filter((runner) => runner.student === true)
  .reduce((acc, time) => acc + time, 0);

console.log(whoWon);
