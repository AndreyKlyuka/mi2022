import React from 'react'
import { ActionPanel } from '../components/ActionPanel'
import { ContentSection } from '../components/ContentSection'

export const VotingPage = () => {
  return (
    <>
      <ActionPanel />
      <ContentSection currentPage={'voting'} />
    </>
  )
}
