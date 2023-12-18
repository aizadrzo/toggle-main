import { type VariantProps, cva } from "class-variance-authority";

export const ButtonCVA = cva("btn rounded-full", {
  variants: {
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    },
    variant: {
      contain: "",
      outline: "btn-outline",
      ghost: "btn-ghost",
      link: "btn-link underline-offset-2",
    },
    colorStyle: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      white: "bg-white text-black hover:bg-neutral-content hover:text-base-100",
      accent: "btn-accent",
      blue: "btn-info",
      red: "btn-error",
      yellow: "btn-warning",
      green: "btn-green",
    },
    active: {
      true: "btn-active",
    },
  },
  defaultVariants: {
    variant: "contain",
    size: "md",
    colorStyle: "primary",
    active: false,
  },
});

export type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;
