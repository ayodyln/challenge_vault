"use strict";
/*
Time Conversion:
Given a time in 12-hour AM/PM format, convert it to Military/24 hour format.
*/

function timeConversion(s: string): string {
  // Write your code here
  const timeStrings = s.match(/[^:AMPM]+/g);
  if (!timeStrings) return "No Match or Input";
  console.log(timeStrings)
  const date = new Date();
  //   need to check for either PM pr AM
  return ``;
}

function main() {
  const str = timeConversion(`12:00:00PM`);
  console.log(str);
}

main();
