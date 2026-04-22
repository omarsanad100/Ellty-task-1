import { Checkbox } from './Checkbox'
import { usePageSelector } from '../hooks/usePageSelector'
import { Button } from '../ui/Button'
import { PAGES } from '../constants/pages'

const PageSelector = () => {
  const { selectedPages, allPagesSelected, toggleAllPages, togglePage } =
    usePageSelector()

  return (
    <div className='h-screen bg-gray-100 flex items-center justify-center p-8 overflow-hidden'>
      <div className="w-[370px] h-[326px] bg-white rounded-[6px] shadow-lg overflow-hidden flex flex-col font-['Montserrat']">
        {/* --------------------------- All pages checkbox --------------------- */}
        <div className='mt-[14px] '>
          <Checkbox
            checked={allPagesSelected}
            onChange={toggleAllPages}
            label='All pages'
          />
        </div>

        <div className='border-b border-gray-200 mt-[5px] mb-[12px] w-full mx-auto max-w-[340px]' />

        {/*----------------------------- shows 4 items -------------------------- */}
        <div className='max-h-64 overflow-y-auto scrollbar-hide'>
          {PAGES.map(page => (
            <div key={page.id}>
              <Checkbox
                checked={selectedPages.has(page.id)}
                onChange={() => togglePage(page.id)}
                label={page.name}
              />
            </div>
          ))}
        </div>

        {/*----------------------------- Done button -------------------------- */}
        <p className='border-b border-gray-200 my-4 w-full mx-auto max-w-[340px]'></p>
        <Button />
      </div>
    </div>
  )
}

export default PageSelector
