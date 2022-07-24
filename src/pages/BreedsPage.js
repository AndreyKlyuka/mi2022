import React from 'react'
import { ActionPanel } from '../components/ActionPanel'
import { ContentSection } from '../components/ContentSection'

export const BreedsPage = () => {
  return (
    <>
      <ActionPanel />
      <ContentSection currentPage={'breeds'} />
    </>
  )
}
