export const CheckboxUncheckedState = () => {
  return (
    <div
      className='relative flex items-center justify-center w-[23px] h-[23px] rounded-[6px] border border-[#CDCDCD] bg-white transition-all
      group-hover:border-[#BDBDBD] group-hover:bg-gray-50
      group-data-[pressed=true]:border-gray-500 group-data-[pressed=true]:bg-white
      group-data-[pressed=true]:ring-2 group-data-[pressed=true]:ring-[#DBEAFE]'
    >
      <svg
        className='w-full h-full text-gray-400 transition-colors opacity-0 group-hover:opacity-100 group-hover:text-[#E3E3E3] group-data-[pressed=true]:text-[#878787]'
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
