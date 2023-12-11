import { type VariantProps, cva } from "class-variance-authority";

export const BadgeCVA = cva("badge rounded-md", {
  variants: {
    size: {
      xs: "badge-xs py-3",
      sm: "badge-sm py-3",
      md: "badge-md py-4",
      lg: "badge-lg py-6",
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
