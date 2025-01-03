import { ChangeEvent, FC } from 'react'

import { useDebouncedValue } from '@shared/lib/hooks'

import * as S from './SearchInput.styled'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  debounceMs?: number
}

export const SearchInput: FC<Props> = ({
  value,
  onChange,
  placeholder = 'Search...',
  debounceMs = 500,
}) => {
  const { value: localValue, setValue: setLocalValue } = useDebouncedValue(value, {
    delay: debounceMs,
    onChange,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value)
  }

  return (
    <S.InputWrapper>
      <S.Input
        type="text"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label="Search repositories"
      />
    </S.InputWrapper>
  )
}
