export const CheckboxIndicatorIndeterminate = () => {
  return (
    <div
      className='relative flex items-center justify-center w-[23px] h-[23px] rounded-[6px] border-2 border-blue-500 bg-white transition-all
      group-hover:border-blue-600 group-hover:bg-blue-50
      group-data-[pressed=true]:ring-2 group-data-[pressed=true]:ring-[#DBEAFE]
      group-data-[pressed=true]:border-blue-700 group-data-[pressed=true]:bg-blue-100'
    >
      <div
        className='w-2 h-2 rounded-full bg-blue-500 transition-colors
        group-hover:bg-blue-600
        group-data-[pressed=true]:bg-blue-700'
      />
    </div>
  )
}
