import { describe, expect, it } from "@jest/globals";
import { mergeStyles } from "../../src";

describe("mergeStyles function", () => {
  it("merges styles without undefined values", () => {
    const style1 = undefined;
    const style2 = { color: "red", fontSize: 16 };
    const style3 = { fontWeight: "bold" };
    const style4 = undefined;

    const mergedStyles = mergeStyles(style1, style2, style3, style4);

    expect(mergedStyles).toEqual([style2, style3]);
  });

  it("returns an empty array when all input styles are undefined", () => {
    const style1 = undefined;
    const style2 = undefined;

    const mergedStyles = mergeStyles(style1, style2);

    expect(mergedStyles).toEqual([]);
  });

  it("returns an empty array when no input styles are provided", () => {
    const mergedStyles = mergeStyles();

    expect(mergedStyles).toEqual([]);
  });
});
