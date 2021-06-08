import { Variant, ColorVariant, Color } from "@theme";

type ComposedVariant = `${Variant}.${ColorVariant}`;

export const splitVariant = (
  composedVariant: ComposedVariant
): { variant: Variant; colorVariant: ColorVariant } | null => {
  if (!composedVariant) {
    return null;
  }

  const [variant, colorVariant] = composedVariant.split(".") as [
    Variant,
    ColorVariant
  ];

  return { variant, colorVariant };
};

export const getColor = (
  themeColors: Color,
  composedVariant: ComposedVariant
) => {
  if (!themeColors) {
    return null;
  }

  const properties = splitVariant(composedVariant);

  if (!properties) {
    return null;
  }

  const { colorVariant, variant } = properties;

  return themeColors[variant][colorVariant];
};
