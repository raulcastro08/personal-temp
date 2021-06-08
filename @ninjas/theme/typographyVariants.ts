type Typography = {
  fontSize: string;
  fontWeight: string;
  lineHeight: number;
};

export type TypographyType =
  | "title"
  | "titleXL"
  | "titleXS"
  | "subTitle"
  | "paragraph1"
  | "paragraph2"
  | "smallestException";

export type TypographyVariant = {
  // eslint-disable-next-line no-unused-vars
  [key in TypographyType]: Typography;
};

export const typographyVariants: TypographyVariant = {
  // [title]
  titleXL: {
    fontSize: "100px",
    fontWeight: "4000",
    lineHeight: 1.25, // 125%
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: 1.25, // 125%
  },
  titleXS: {
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: 1.25, // 125%
  },
  // [subTitle]
  subTitle: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: 1.25, // 125%
  },
  // [paragraph1]
  paragraph1: {
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: 1.8, // 125%
  },
  // [paragraph2]
  paragraph2: {
    fontSize: "14px",
    fontWeight: "300",
    lineHeight: 1.25, // 125%
  },
  // [smallestException]
  smallestException: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: 1, // 100%
  },
};
