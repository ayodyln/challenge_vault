import { afterAll, describe, expect, it, test, vi } from "vitest";
import timeConversion from "../src/time_conversion";

describe(`Time Conversion - Convert 12-Hour (AM/PM) string format to Military/24-Hour format`, () => {
  it("Test 1: Should be - 14:00:00", () => {
    expect(timeConversion(`2:00:00AM`)).toBe("02:00:00");
  });

  it("Test 2: Should be - 20:30:23", () => {
    expect(timeConversion(`8:30:23PM`)).toBe("20:30:23");
  });

  it("Test 3: Should be - 00:40:22", () => {
    expect(timeConversion(`12:40:22AM`)).toBe("00:40:22");
  });

  it("Test 4: Should be - 12:45:54", () => {
    expect(timeConversion(`12:45:54PM`)).toBe("12:45:54");
  });

  it("Test 5: Should be - 23:59:59", () => {
    expect(timeConversion(`11:59:59PM`)).toBe("23:59:59");
  });
});
