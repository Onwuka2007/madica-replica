import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Input = forwardRef(function Input({ className, type = 'text', ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'mt-2 h-9 w-full border border-[#c5c9cb] bg-transparent px-3 text-sm text-[#15272c] outline-none placeholder:text-[#8a9295]',
        className,
      )}
      {...props}
    />
  )
})

export { Input }
