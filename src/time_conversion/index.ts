"use strict";
/*
Time Conversion:
Given a time in 12-hour AM/PM format, convert it to Military/24 hour format.
*/

function timeConversion(s: string = `2:00:00PM`): string {
  // Write your code here
  /*
    Regex expression is doing the following:
      1.) //g - the encapsulating forward slashes is the our pattern(s);
          g is Global Matching, finds all matches rather than stopping at the first match.

      2.) \d+ - Captures one or morde digets in a string
      
      3.) [A-Z]+ - Matches any Uppercase characerts 
  */
  const timeStrings = s.match(/\d+|[A-Z]+/g);
  if (!timeStrings) return "No Match or Input";
  const date = new Date();
  if (timeStrings[3] === "AM") {
    date.setHours(+timeStrings[0] === 12 ? 0 : +timeStrings[0]);
  } else {
    date.setHours(
      +timeStrings[0] !== 12 ? +timeStrings[0] + 12 : +timeStrings[0]
    );
  }
  date.setMinutes(+timeStrings[1]);
  date.setSeconds(+timeStrings[2]);
  return `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  }:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;
}

export default timeConversion;
