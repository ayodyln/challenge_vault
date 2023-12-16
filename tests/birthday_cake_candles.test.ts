// sum.test.js
import { expect, test } from "vitest";

import birthdayCakeCandles from "../src/birthday_cake_candles";

test("Birthday Cake Candles: [4, 3, 2, 4]", () => {
  expect(birthdayCakeCandles([4, 3, 2, 4])).toBe(2);
});
