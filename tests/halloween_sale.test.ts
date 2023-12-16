import { afterAll, describe, expect, it, test, vi } from "vitest";
import howManyGames from "../src/halloween_sale";

describe("FizzBuzz output should match", () => {
  it("Input: p = 20, d = 3, m = 6, s = 80; Output: 6", () => {
    expect(howManyGames(20, 3, 6, 80)).toBe(6);
  });
});
