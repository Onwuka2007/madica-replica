import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const variantClassMap = {
  default: 'bg-[#63a75f] text-white',
  secondary: 'bg-[#011D21] text-white',
  ghost: 'bg-transparent text-[#011D21]',
}

const sizeClassMap = {
  default: 'min-h-11 px-5 text-sm',
  sm: 'min-h-9 px-4 text-xs',
  lg: 'min-h-12 px-6 text-base',
}

const Button = forwardRef(function Button(
  { className, variant = 'default', size = 'default', type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition duration-200 hover:brightness-95',
        variantClassMap[variant] || variantClassMap.default,
        sizeClassMap[size] || sizeClassMap.default,
        className,
      )}
      {...props}
    />
  )
})

export { Button }
