import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/helpers'

type CardVariant = 'default' | 'bordered' | 'elevated'

const cardVariants = (variant: CardVariant = 'default') => {
  const variants = {
    default: 'rounded-lg border border-gray-200 bg-white',
    bordered: 'rounded-lg border-2 border-gray-300 bg-white',
    elevated: 'rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow',
  }
  return variants[variant]
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  children: ReactNode
}

export function Card({ className, variant = 'default', children, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants(variant), className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 py-4 border-b border-gray-100', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-lg font-semibold text-gray-900', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('px-6 py-4 border-t border-gray-100', className)} {...props}>
      {children}
    </div>
  )
}
