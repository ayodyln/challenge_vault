import { afterAll, describe, expect, it, test, vi } from "vitest";
import minMaxSum from "../src/min_max_sum";

describe("Min/Max Sum Problem", () => {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterAll(() => {
    consoleMock.mockRestore();
  });

  it("Should log: 10, 14", () => {
    minMaxSum([1, 2, 3, 4, 5]);
    expect(consoleMock).toHaveBeenCalledTimes(1);
    expect(consoleMock.mock.calls.join(", ")).toContain([10, 14]);
  });
});
