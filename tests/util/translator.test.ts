import { describe, expect, it } from "@jest/globals";
import { ViewStyle } from "react-native";
import { translateCosmicStyles } from "../../src/util/translator";

describe("translateCosmicStyles function", () => {
  it("translates shorthand properties to styles correctly", () => {
    const shorthand = {
      w: 100,
      h: 200,
      m: 10,
      mb: 5,
      pl: 15,
      pr: 20,
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
      border: "1px solid red",
      borderRadius: 5,
      bg: "blue",
    };

    const translatedStyles = translateCosmicStyles<ViewStyle>(shorthand);

    expect(translatedStyles.width).toBe(100);
    expect(translatedStyles.height).toBe(200);
    expect(translatedStyles.margin).toBe(10);
    expect(translatedStyles.marginBottom).toBe(5);
    expect(translatedStyles.paddingLeft).toBe(15);
    expect(translatedStyles.paddingRight).toBe(20);
    expect(translatedStyles.display).toBe("flex");
    expect(translatedStyles.flexDirection).toBe("row");
    expect(translatedStyles.flex).toBe(1);
    expect(translatedStyles.justifyContent).toBe("center");
    expect(translatedStyles.alignItems).toBe("center");
    expect(translatedStyles.gap).toBe(8);
    expect(translatedStyles.borderWidth).toBe(1);
    expect(translatedStyles.borderColor).toBe("red");
    expect(translatedStyles.borderRadius).toBe(5);
    expect(translatedStyles.backgroundColor).toBe("blue");
  });

  it("handles undefined shorthand", () => {
    const translatedStyles = translateCosmicStyles<ViewStyle>(undefined);
    expect(translatedStyles).toEqual({});
  });
});
