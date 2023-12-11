import { type VariantProps, cva } from "class-variance-authority";

export const BadgeCVA = cva("badge py-3 rounded", {
  variants: {
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
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
