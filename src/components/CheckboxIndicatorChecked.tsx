export const CheckboxIndicatorChecked = () => {
  return (
    <div
      className='relative flex items-center justify-center w-[23px] h-[23px] rounded-[6px] bg-[#2469F6] border-2 border-[#2469F6] transition-all
      group-hover:bg-[#5087F8] group-hover:border-[#5087F8]
      group-data-[pressed=true]:ring-2 group-data-[pressed=true]:ring-[#DBEAFE]
      group-data-[pressed=true]:bg-blue-700 group-data-[pressed=true]:border-blue-700'
    >
      <svg
        className='w-full h-full text-white'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.3334 4L6.00002 11.3333L2.66669 8'
          stroke='currentColor'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}
