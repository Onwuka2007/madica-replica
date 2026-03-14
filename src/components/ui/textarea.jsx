import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Textarea = forwardRef(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'mt-2 min-h-24 w-full resize-y border border-[#c5c9cb] bg-transparent p-3 text-sm text-[#15272c] outline-none placeholder:text-[#8a9295]',
        className,
      )}
      {...props}
    />
  )
})

export { Textarea }
