import { afterAll, describe, expect, it, test, vi } from "vitest";
import { gradingStudents } from "../src/grading";

describe("Grading Students: HackerUniversity", () => {
  it("In: 73, 67, 38, 33; Out: 75, 67, 40, 33", () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
  });
});
