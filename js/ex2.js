(function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const resultA = arr.filter((ele) => ele % 2 === 1);
  console.log(`An array of odd numbers: [${resultA}]`);

  const resultB = arr.filter((ele) => ele % 2 === 0 || ele % 5 === 0);
  console.log(`An array of numbers divisiblr by 2 or 5: [${resultB}]`);

  const resultC = arr.filter((ele) => ele % 3 === 0).map((ele) => ele * ele);
  console.log(`An array of numbers divisible by 3 square: [${resultC}]`);

  const resultD = arr
    .filter((ele) => ele % 5 === 0)
    .map((ele) => ele * ele)
    .reduce((x, y) => x + y);

  console.log(
    `The sum of the following: square the numbers divisible by 5: ${resultD}`
  );
})();
