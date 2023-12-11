import React, { type FC, type ReactNode } from "react";
import { cn } from "../../../utils";
import {
  Sizes,
  Tags,
  TextCVA,
  type TextVariantProps,
  type VariantType,
} from "./Text.classnames";

interface Text extends TextVariantProps {
  variant: VariantType;
  className?: string;
  children: ReactNode;
}

const Text: FC<Text> = ({
  variant,
  children,
  className,
  colorStyle,
  align,
}) => {
  const Tag = Tags[variant];
  const SizeClassNames = Sizes[variant];

  return (
    <Tag
      className={cn(SizeClassNames, TextCVA({ align, colorStyle, className }))}
    >
      {children}
    </Tag>
  );
};

export default Text;
