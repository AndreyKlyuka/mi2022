import React from 'react'
import girlAndPet from '../assets/girl-and-pet.svg'

export const HomePage = () => {
  return (
    <>
      <div className="bg-[#fbe0dc] bg relative">
        <img
          className="absolute top-[-30px] left-[-65px] max-h-[900px] max-w-[775px]"
          src={girlAndPet}
          alt="girl with pets"
        />
      </div>
    </>
  )
}
