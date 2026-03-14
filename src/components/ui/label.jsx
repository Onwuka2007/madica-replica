import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Label = forwardRef(function Label({ className, ...props }, ref) {
  return (
    <label
      ref={ref}
      className={cn('block text-[0.95rem] font-medium text-[#1f2d31]', className)}
      {...props}
    />
  )
})

export { Label }
