import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Select = forwardRef(function Select({ className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        'mt-2 h-9 w-full border border-[#c5c9cb] bg-transparent px-3 text-sm text-[#15272c] outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
})

export { Select }
