import React, { type ComponentPropsWithRef, type FC } from "react";
import { ButtonCVA, type ButtonVariantProps } from "./Button.classnames";
import { cn } from "../../../utils";

interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    ButtonVariantProps {}

const Button: FC<ButtonProps> = ({
  className,
  variant,
  children,
  ...props
}) => (
  <button
    className={cn(ButtonCVA({ variant, className }))}
    {...props}
  >
    {children}
  </button>
);
export default Button;
