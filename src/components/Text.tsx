import  { type FC, type ReactNode } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

export type VariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "small-p"
  | "small"
  | "display";

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

  const Tags: Record<VariantType, keyof JSX.IntrinsicElements> = {
    display: "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    "small-p": "span",
    small: "small",
  };

  const Sizes: Record<VariantType, string> = {
    display: "text-[42px] md:text-7xl font-bold leading-10",
    h1: "text-[32px] md:text-[40px] font-semibold leading-10",
    h2: "text-[28px] md:text-[32px] font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-semibold",
    p: "text-base",
    "small-p": "text-sm sm:text-md",
    small: "text-xs",
  };

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

const TextCVA = cva("", {
  variants: {
    colorStyle: {
      primary: "text-accent",
      secondary: "text-[#585D69]",
      accent: "text-primary",
      inverse: "text-base-100",
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
  defaultVariants: {
    colorStyle: "primary",
    align: "left",
  },
});

type TextVariantProps = NonNullable<VariantProps<typeof TextCVA>>;

