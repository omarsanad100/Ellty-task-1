import { useState } from 'react'
import { CheckboxIndicatorChecked } from './CheckboxIndicatorChecked.tsx'
import { CheckboxIndicatorIndeterminate } from './CheckboxIndicatorIndeterminate.tsx'
import { CheckboxIndicatorUnchecked } from './CheckboxIndicatorUnchecked.tsx'

interface Props {
  checked: boolean
  isIndeterminate?: boolean
  onChange: () => void
  label: string
}

export const Checkbox = ({
  checked,
  isIndeterminate = false,
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
        aria-checked={isIndeterminate ? 'mixed' : checked}
        className='peer sr-only'
      />

      {isIndeterminate ? (
        <CheckboxIndicatorIndeterminate />
      ) : checked ? (
        <CheckboxIndicatorChecked />
      ) : (
        <CheckboxIndicatorUnchecked />
      )}
    </label>
  )
}
