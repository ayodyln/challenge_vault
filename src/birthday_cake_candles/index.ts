/*
Birthday Cake Candles:

For a child's birthday, they only can blow candles out from the tallest to smallest
height. In an array of numbers, the height of each candle is stored. How many times 
does the tallest candle occur in a given array.
*/

function birthdayCakeCandles(candles: number[]): number {
  // Write your code here
  const tallest = Math.max(...candles);

  return candles.reduce((acc, curr) => {
    if (curr === tallest) acc++;
    return acc;
  }, 0);
}

export default birthdayCakeCandles;
