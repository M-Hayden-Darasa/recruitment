import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer text-content-button bg-transparent rounded-full",
  {
    variants: {
      variant: {
        default: 'border-button-text border',
        outline: '',
        icon: 'bg-button-color icon-button',
      },
      size: {
        default: 'px-[18px] py-[10px]',
        sm: 'px-3 py-[6px]',
        icon: 'p-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface ButtonPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  textContent?: React.ReactNode
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  textContent,
  ...props
}: ButtonPropsInterface) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        'flip-button uppercase text-[13px]',
      )}
      {...props}
    >
      {textContent}
    </Comp>
  )
}

export { Button, buttonVariants }
