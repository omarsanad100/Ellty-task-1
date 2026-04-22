interface Props {
  onClick?: () => void
}

export const Button = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='
        w-[340px] h-[40px] mx-auto mb-5 py-[10px] text-[14px] rounded-[4px]
        bg-[#FFCE22] text-gray-900
        transition-colors
        hover:bg-[#FFD84D]
      '
    >
      Done
    </button>
  )
}
