"use strict";

/*
The FizzBuzz problem is a classic programming exercise that involves printing numbers from 1 to a given input number (in this case, 100), with a few exceptions:
- For numbers divisible by 3, "Fizz" should be printed instead of the number.
- For numbers divisible by 5, "Buzz" should be printed instead of the number.
- For numbers divisible by both 3 and 5, "FizzBuzz" should be printed instead of the number.
*/

function fizzBuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }

    if (output === "") {
      console.log(i);
    } else {
      console.log(output);
    }
  }
}

export default fizzBuzz;
