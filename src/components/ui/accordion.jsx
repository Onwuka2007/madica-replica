import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'

const AccordionContext = createContext(null)
const AccordionItemContext = createContext(null)

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Accordion({
  type = 'single',
  collapsible = false,
  value,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}) {
  const [internalValue, setInternalValue] = useState(() => {
    if (value !== undefined) return value

    if (defaultValue !== undefined) return defaultValue

    return type === 'multiple' ? [] : ''
  })

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const setValue = (nextValue) => {
    if (!isControlled) {
      setInternalValue(nextValue)
    }

    onValueChange?.(nextValue)
  }

  const isItemOpen = (itemValue) => {
    if (type === 'multiple') {
      return Array.isArray(currentValue) && currentValue.includes(itemValue)
    }

    return currentValue === itemValue
  }

  const toggleItem = (itemValue) => {
    if (type === 'multiple') {
      const items = Array.isArray(currentValue) ? currentValue : []

      if (items.includes(itemValue)) {
        setValue(items.filter((entry) => entry !== itemValue))
        return
      }

      setValue([...items, itemValue])
      return
    }

    if (currentValue === itemValue) {
      if (collapsible) {
        setValue('')
      }
      return
    }

    setValue(itemValue)
  }

  const contextValue = {
    isItemOpen,
    toggleItem,
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, className, children, ...props }) {
  const rootContext = useContext(AccordionContext)

  if (!rootContext) {
    throw new Error('AccordionItem must be used inside Accordion')
  }

  const itemId = useId().replace(/:/g, '')

  const isOpen = rootContext.isItemOpen(value)
  const panelId = `${itemId}-panel`
  const triggerId = `${itemId}-trigger`

  const contextValue = {
    value,
    isOpen,
    panelId,
    triggerId,
    toggle: () => rootContext.toggleItem(value),
  }

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        className={className}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export function AccordionTrigger({ className, children, ...props }) {
  const itemContext = useContext(AccordionItemContext)

  if (!itemContext) {
    throw new Error('AccordionTrigger must be used inside AccordionItem')
  }

  return (
    <h3>
      <button
        type="button"
        id={itemContext.triggerId}
        aria-controls={itemContext.panelId}
        aria-expanded={itemContext.isOpen}
        data-state={itemContext.isOpen ? 'open' : 'closed'}
        onClick={itemContext.toggle}
        className={cn(className)}
        {...props}
      >
        {children}
      </button>
    </h3>
  )
}

export function AccordionContent({ className, children, ...props }) {
  const itemContext = useContext(AccordionItemContext)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  if (!itemContext) {
    throw new Error('AccordionContent must be used inside AccordionItem')
  }

  useEffect(() => {
    if (!contentRef.current) return

    if (itemContext.isOpen) {
      setHeight(contentRef.current.scrollHeight)
      return
    }

    setHeight(0)
  }, [itemContext.isOpen, children])

  return (
    <div
      id={itemContext.panelId}
      role="region"
      aria-labelledby={itemContext.triggerId}
      aria-hidden={!itemContext.isOpen}
      data-state={itemContext.isOpen ? 'open' : 'closed'}
      style={{ height: `${height}px` }}
      className="overflow-hidden transition-[height] duration-300 ease-out"
      {...props}
    >
      <div ref={contentRef} className={className}>
        {children}
      </div>
    </div>
  )
}
