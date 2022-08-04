import React, { useEffect, useState } from 'react'
import { ActionPanel } from '../components/ActionPanel'
import { ContentSection } from '../components/ContentSection'
import { Dropdown } from '../components/Dropdown'

import inputArrow from '../assets/input-arrow.svg'
export const BreedsPage = () => {
  const [dropdown, setDropdown] = useState(null)
  const [breedsFlag, setbreedsFlag] = useState(false)
  const [limitFlag, setlimitFlag] = useState(false)

  const dropdownHandler = (e) => {
    if (e.currentTarget.className.toString().includes('breeds')) {
      setbreedsFlag(true)
      if (breedsFlag === true) {
        setbreedsFlag(false)
        // setlimitFlag(true)
      }
      setDropdown('breeds')
    } else {
      setlimitFlag(true)
      if (limitFlag === true) {
        setlimitFlag(false)
        // setbreedsFlag(true)
      }
      setDropdown('limit')
    }
  }

  useEffect(() => {
    // console.log(breedsFlag)
    // console.log(limitFlag, 'limit')
  })

  return (
    <>
      <ActionPanel />
      <ContentSection currentPage={'breeds'}>
        <div className="relative ml-[10px] flex gap-[10px]">
          <div className="breeds__input" onClick={dropdownHandler}>
            <div className="flex justify-between w-full my-[8px] mx-[10px]">
              <div className="w-full">{'All breeds'}</div>

              <div
                className={
                  breedsFlag
                    ? 'flex justify-center items-center rotate-180'
                    : 'flex justify-center items-center'
                }
              >
                <img src={inputArrow} alt="" />
              </div>
            </div>
            {dropdown === 'breeds' && breedsFlag && (
              <Dropdown heightTWProps={'h-[300px]'} />
            )}
          </div>

          <div className="limit__input" onClick={dropdownHandler}>
            <div className="flex justify-between w-full my-[8px] mx-[10px]">
              <div className="w-full">{'Limit: 10'}</div>

              <div
                className={
                  limitFlag
                    ? 'flex justify-center items-center rotate-180'
                    : 'flex justify-center items-center'
                }
              >
                <img src={inputArrow} alt="" />
              </div>
            </div>
            {dropdown === 'limit' && limitFlag && (
              <Dropdown heightTWProps={'h-[164px]'} />
            )}
          </div>

          <div className="breeds__sort">a</div>
          <div className="breeds__sort">b</div>
        </div>
      </ContentSection>
    </>
  )
}
