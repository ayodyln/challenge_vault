/*
    Given an array of integers, calculate the ratios of its 
    elements that are positive, negative, and zero. Print the 
    decimal value of each fraction on a new line with  places 
    after the decimal.

    * Complete the 'plusMinus' function below.
    * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  let [posCount, negCount, zeroCount] = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) posCount++;
    if (arr[i] < 0) negCount++;
    if (arr[i] === 0) zeroCount++;
  }
  console.log((posCount / arr.length).toFixed(6));
  console.log((negCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}

function main() {
  plusMinus([1, 1, 0, -1, -1]);
}

main();
