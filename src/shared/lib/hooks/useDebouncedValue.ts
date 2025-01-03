import { useEffect, useState } from 'react'

interface Options {
  delay?: number
  onChange?: (value: string) => void
}

export const useDebouncedValue = (initialValue: string, { delay = 500, onChange }: Options) => {
  const [value, setValue] = useState(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {
    if (value === debouncedValue) return

    const timer = setTimeout(() => {
      setDebouncedValue(value)
      onChange?.(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay, onChange, debouncedValue])

  return {
    value,
    debouncedValue,
    setValue,
  }
}
