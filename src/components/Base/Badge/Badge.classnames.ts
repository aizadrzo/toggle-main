import { type VariantProps, cva } from "class-variance-authority";

export const BadgeCVA = cva("badge rounded-md", {
  variants: {
    size: {
      sm: "badge-sm py-sm",
      md: "badge-md py-md",
      lg: "badge-lg py-lg",
    },
    colorStyle: {
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      green: "badge-success",
      red: "badge-error",
      yellow: "badge-warning",
      blue: "badge-info",
    },
  },
  defaultVariants: {
    size: "md",
    colorStyle: "primary",
  },
});

export type BadgeVariantProps = NonNullable<VariantProps<typeof BadgeCVA>>;
