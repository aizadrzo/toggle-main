import React, { type ComponentProps, type FC } from "react";
import { LinkCVA, type LinkVariantProps } from "./Link.classnames";
import { cn } from "../../../utils";

interface LinkProps extends ComponentProps<"a">, LinkVariantProps {}

const Link: FC<LinkProps> = ({
  colorStyle = "primary",
  isBold = false,
  children,
  className,
  href,
  ...props
}) => (
  <a
    href={href}
    className={cn(LinkCVA({ colorStyle, isBold, className }))}
    {...props}
  >
    {children}
  </a>
);

export default Link;
