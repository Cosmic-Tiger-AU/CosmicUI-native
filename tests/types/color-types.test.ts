import { describe, expect, it } from "@jest/globals";
import { getColor } from "../../src/types/color-types";

const mockTheme = {
  colors: {
    primary: "blue",
    secondary: "green",
    background: "white",
    light: "gray",
    textPrimary: "black",
    textSecondary: "darkgray",
  },
};

describe("getColor function", () => {
  it("returns the correct color based on input", () => {
    expect(getColor(mockTheme, "primary")).toBe("blue");
    expect(getColor(mockTheme, "secondary")).toBe("green");
    expect(getColor(mockTheme, "background")).toBe("white");
    expect(getColor(mockTheme, "light")).toBe("gray");
    expect(getColor(mockTheme, "textPrimary")).toBe("black");
    expect(getColor(mockTheme, "textSecondary")).toBe("darkgray");
  });

  it("returns default color for unknown input", () => {
    expect(getColor(mockTheme, "")).toBe("purple");
  });
});
