import { type VariantProps, cva } from "class-variance-authority";

export type VariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "small-p"
  | "small"
  | "display";

export const Tags: Record<VariantType, keyof JSX.IntrinsicElements> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  "small-p": "span",
  small: "small",
};

export const Sizes: Record<VariantType, string> = {
  display: "text-[42px] sm:text-7xl font-bold",
  h1: "text-[32px] sm:text-[40px] font-semibold leading-10",
  h2: "text-[28px] sm:text-[32px] font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
  p: "text-base",
  "small-p": "text-sm sm:text-md",
  small: "text-xs",
};

export const TextCVA = cva("", {
  variants: {
    colorStyle: {
      primary: "text-white",
      secondary: "text-[#C7C7C7]",
      accent: "text-accent",
      red: "text-error",
      green: "text-success",
      blue: "text-info",
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    colorStyle: "primary",
    align: "left",
  },
});

export type TextVariantProps = NonNullable<VariantProps<typeof TextCVA>>;
