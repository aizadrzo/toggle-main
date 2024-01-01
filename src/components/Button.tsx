import { type ComponentPropsWithRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

interface Button
  extends ComponentPropsWithRef<"button">,
    ButtonVariantProps {}

const Button = ({
  className,
  variant,
  children,
  size,
  ...props
}: Button) => (
  <button
    className={cn(ButtonCVA({ variant, size,className }))}
    {...props}
  >
    {children}
  </button>
);
export default Button;

const ButtonCVA = cva("btn rounded-md capitalize font-medium transition duration-300 ease-in-out btn-md py-3 px-6 text-base font-semibold h-auto", {
  variants: {
    variant: {
      primary: "btn-contain btn-primary border border-primary",
      secondary: "btn-outline bg-secondary border border-primary text-primary hover:bg-primary hover:border-primary",
    },
    size: {
      'sm': 'btn-sm py-1.5 px-3 text-sm',
      'default':'btn-md py-3 px-6',
    }
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonVariantProps = NonNullable<VariantProps<typeof ButtonCVA>>;

