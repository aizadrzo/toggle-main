import React, { type PropsWithChildren, type ReactNode } from 'react'
import { cn } from '../../../utils'

type Badge = {
    children: ReactNode;
    className?: string;
}

const Badge = ({children, className}:Badge) => {
  return (
    <div className={cn('border-border-color border bg-white rounded-full py-1 px-3 text-xs text-accent  inline-flex gap-1 tracking-wide', className)}>{children}</div>
  )
}

export default Badge