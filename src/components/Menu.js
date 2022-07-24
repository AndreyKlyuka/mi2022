import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import voteTable from '../assets/vote-table.svg'
import petBreeds from '../assets/pet-breeds.svg'
import imagesSearch from '../assets/images-search.svg'
import { Card } from './Card'

export const Menu = () => {
  const [page, setPage] = useState('home')

  const pageHandlerCallback = (page) => {
    setPage(page)
  }

  return (
    <>
      <img className="w-[106px] h-[24px]" src={logo} alt="logo" />
      <p className="black-text font-medium text-[44px] pt-[80px]">Hi intern!</p>
      <p className="gray-text pt-[10px]">Welcome to MI 2022 Front-end test</p>
      <p className="black-text font-medium text-[20px] pt-[60px]">
        Lets start using The Cat API
      </p>
      <div className="flex justify-between pt-[20px]">
        <Card
          img={voteTable}
          buttonText={'voting'}
          class={
            page === 'voting' ? 'card__voting card_active' : 'card__voting'
          }
          page={page}
          onClick={pageHandlerCallback}
        ></Card>
        <Card
          img={petBreeds}
          buttonText={'breeds'}
          class={
            page === 'breeds' ? 'card__breeds card_active' : 'card__breeds'
          }
          page={page}
          onClick={pageHandlerCallback}
        ></Card>
        <Card
          img={imagesSearch}
          buttonText={'gallery'}
          class={
            page === 'gallery' ? 'card__gallery card_active' : 'card__gallery'
          }
          page={page}
          onClick={pageHandlerCallback}
        ></Card>
      </div>
    </>
  )
}
