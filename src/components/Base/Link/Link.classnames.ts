import { type VariantProps, cva } from "class-variance-authority";

export const LinkCVA = cva("link underline-offset-2", {
  variants: {
    colorStyle: {
      primary: "text-primary",
      secondary: "text-secondary",
      green: "text-success",
      yellow: "text-warning",
      blue: "text-info",
    },
    isBold: {
      true: "font-bold",
    },
    defaultVariants: {
      isBold: false,
      colorStyle: "primary",
    },
  },
});

export type LinkVariantProps = NonNullable<VariantProps<typeof LinkCVA>>;
