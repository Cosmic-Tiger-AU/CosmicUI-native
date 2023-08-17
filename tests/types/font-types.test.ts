import { describe, expect, it } from "@jest/globals";
import { getFont } from "../../src/types/font-types";

const mockTheme = {
  fonts: {
    light: "LightFont",
    regular: "RegularFont",
    bold: "BoldFont",
  },
};

describe("getFont function", () => {
  it("returns the correct font based on input", () => {
    expect(getFont(mockTheme, "light")).toEqual(["LightFont", "300"]);
    expect(getFont(mockTheme, "regular")).toEqual(["RegularFont", "normal"]);
    expect(getFont(mockTheme, "bold")).toEqual(["BoldFont", "bold"]);
  });

  it("returns default font for unknown input", () => {
    expect(getFont(mockTheme, "invalidWeight")).toEqual([
      "RegularFont",
      "normal",
    ]);
    expect(getFont(mockTheme, "")).toEqual(["RegularFont", "normal"]);
  });
});
