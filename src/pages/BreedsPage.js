import React from 'react'
import { ActionPanel } from '../components/ActionPanel'
import { ContentSection } from '../components/ContentSection'
import { Dropdown } from '../components/Dropdown'

export const BreedsPage = () => {
  return (
    <>
      <ActionPanel />
      <ContentSection currentPage={'breeds'}>
        <div className="ml-[10px] flex gap-[10px]">
          <div className="relative w-[226px] breeds__input">
            all breeds
            <Dropdown height={'300'} />
          </div>
          <div className="w-[101px] breeds__input">limit</div>
          <div className="w-[40px] breeds__input">a-b</div>
          <div className="w-[40px] breeds__input">b-a</div>
        </div>
      </ContentSection>
    </>
  )
}
