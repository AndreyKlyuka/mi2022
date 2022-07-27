import React from 'react'
import { ActionPanel } from '../components/ActionPanel'
import { ContentSection } from '../components/ContentSection'

export const GalleryPage = () => {
  return (
    <>
      <ActionPanel />
      <ContentSection currentPage={'gallery'}> gallery sort</ContentSection>
    </>
  )
}
