import { useState, useCallback } from 'react'
import { PAGES } from '../constants/pages'

export const usePageSelector = () => {
  const [selectedPages, setSelectedPages] = useState<Set<number>>(
    new Set()
  )

  const allPagesSelected = selectedPages.size === PAGES.length

  const toggleAllPages = useCallback(() => {
    if (allPagesSelected) {
      setSelectedPages(new Set())
    } else {
      setSelectedPages(new Set(PAGES.map(page => page.id)))
    }
  }, [allPagesSelected])

  const togglePage = useCallback((pageId: number) => {
    setSelectedPages(prev => {
      const newSelected = new Set(prev)
      if (newSelected.has(pageId)) {
        newSelected.delete(pageId)
      } else {
        newSelected.add(pageId)
      }
      return newSelected
    })
  }, [])

  return {
    selectedPages,
    allPagesSelected,
    toggleAllPages,
    togglePage
  }
}
