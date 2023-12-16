"use strict";
/*
Given five positive integers, find the minimum and maximum values that 
can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line 
of two space-separated long integers.
*/

function reducer(arr: number[], index: number): number {
  return arr.filter((n, i) => i !== index).reduce((acc, curr) => acc + curr, 0);
}

function minMaxSum(arr: number[]): void {
  let min: number = Math.min(...arr);
  let max: number = Math.max(...arr);
  const minIndex = arr.findIndex((n) => n === min);
  const maxIndex = arr.findIndex((n) => n === max);
  min = reducer(arr, maxIndex);
  max = reducer(arr, minIndex);
  console.log(min, max);
}

export default minMaxSum;
