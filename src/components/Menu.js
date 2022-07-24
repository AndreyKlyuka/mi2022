import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import voteTable from '../assets/vote-table.svg'
import petBreeds from '../assets/pet-breeds.svg'
import imagesSearch from '../assets/images-search.svg'
import { Card } from './Card'

export const Menu = () => {
  const [page, setPage] = useState('breeds')

  const pageHandlerCallback = (page) => {
    setPage(page)
  }

  useEffect(() => {
    console.log(page)
  }, [page])
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
          buttonText={'VOTING'}
          class={
            page === 'voting' ? 'card__voting card_active' : 'card__voting'
          }
          to={'voting'}
          page={page}
          onClick={pageHandlerCallback}
        ></Card>
        <Card
          img={petBreeds}
          buttonText={'BREEDS'}
          class={
            page === 'breeds' ? 'card__breeds card_active' : 'card__breeds'
          }
          to={'breeds'}
          page={page}
          onClick={pageHandlerCallback}
        ></Card>
        <Card
          img={imagesSearch}
          buttonText={'GALLERY'}
          class={
            page === 'gallery' ? 'card__gallery card_active' : 'card__gallery'
          }
          to={'gallery'}
          page={page}
          onClick={pageHandlerCallback}
        ></Card>
        {/* <div className="card card__voting">
          <div className="card__image ">
            <img src={voteTable} alt="vote card" />
          </div>
          <div className="card__button ">
            <NavLink to="/voting">VOTING</NavLink>
          </div>
        </div> */}
        {/* <div className="card card__breeds ">
          <div className="card__image">
            <img src={petBreeds} alt="breeds card" />
          </div>
          <div className="card__button ">
            <NavLink to="/breeds">BREEDS</NavLink>
          </div>
        </div> */}
        {/* <div className="card card__gallery card_active">
          <div className="card__image">
            <img src={imagesSearch} alt="gallery card" />
          </div>
          <div className="card__button">
            <NavLink to="/gallery">GALLERY</NavLink>
          </div>
        </div> */}
      </div>
    </>
  )
}
