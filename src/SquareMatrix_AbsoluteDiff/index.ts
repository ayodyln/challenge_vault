/*
 ? Given a square matrix, calculate the absolute difference between the sums of its diagonals.

 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

function diagonalDifference(arr: number[][]): number {
  // Write your code here
  let x: number = 0;
  let y: number = 0;

  for (let i = 0; i < arr.length; i++) {
    x += arr[i][i];
    y += arr[i][arr.length - 1 - i];
  }

  return Math.abs(x - y);
}

function main() {
  const matrix = [
    [1, 3, 5],
    [4, 1, 6],
    [12, 5, 7],
  ];
  console.log(
    matrix,
    `\nAbsolute Difference of Matrix: ${diagonalDifference(matrix)}`
  );
}

main();
