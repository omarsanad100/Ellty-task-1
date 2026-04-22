import { useState } from 'react'
import { CheckboxCheckedState } from './Checkbox-checked-state'
import { CheckboxIndeterminateState } from './Checkbox-indeterminate-state'
import { CheckboxUncheckedState } from './Checkbox-unchecked-state'

interface Props {
  checked: boolean
  indeterminate?: boolean
  onChange: () => void
  label: string
}

export const Checkbox = ({
  checked,
  indeterminate = false,
  onChange,
  label
}: Props) => {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressStart = () => {
    setIsPressed(true)
  }

  const handlePressEnd = () => {
    setIsPressed(false)
  }

  return (
    <label
      onMouseDown={handlePressStart}
      onTouchStart={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchEnd={handlePressEnd}
      onTouchCancel={handlePressEnd}
      data-pressed={isPressed ? 'true' : 'false'}
      className='group flex items-center justify-between px-6 bg-white cursor-pointer h-[42px] py-[8px] pr-[15px] pl-[22px] transition-colors'
    >
      <span className='text-[14px] font-normal text-gray-900'>
        {label}
      </span>

      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        aria-checked={indeterminate ? 'mixed' : checked}
        className='peer sr-only'
      />

      {indeterminate ? (
        <CheckboxIndeterminateState />
      ) : checked ? (
        <CheckboxCheckedState />
      ) : (
        <CheckboxUncheckedState />
      )}
    </label>
  )
}
