import React, { type FC, type ReactNode } from "react";
import { BadgeCVA, type BadgeVariantProps } from "./Badge.classnames";
import { cn } from "../../../utils";

interface BadgeProps extends BadgeVariantProps {
  children: ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({
  children,
  className,
  size = "md",
  colorStyle = "accent",
}) => (
  <div className={cn(BadgeCVA({ size, colorStyle, className }))}>
    {children}
  </div>
);

export default Badge;
