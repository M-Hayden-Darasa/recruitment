import { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'headline-extralarge',
      h2: 'headline-large',
      h3: 'headline-medium',
      h4: 'headline-small-semibold',
      h5: 'headline-extrasmall',
      p: 'content-macro',
    },
    textColor: {
      default: 'background-foreground',
      secondary: 'text-secondary',
    },
    textAlign: {
      left: 'text-left',
      right: 'text-right',
      center: 'text-center',
    },
    fontWeight: {
      thin: 'font-thin',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    textColor: 'default',
    fontWeight: 'medium',
  },
})

export type TypographyVariantProps = VariantProps<typeof typographyVariants>

interface TypographyProps extends HTMLAttributes<HTMLElement>, TypographyVariantProps {}

export function Typography({
  className,
  variant,
  children,
  textColor,
  textAlign,
  fontWeight,
  ...props
}: TypographyProps) {
  const Comp = variant || 'p'

  return (
    <Comp
      className={cn(
        typographyVariants({ variant, textColor, textAlign, fontWeight }),
        className,
        'text-text-adverting',
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
