import React from 'react'
import logo from '../assets/logo.svg'
import voteTable from '../assets/vote-table.svg'
import petBreeds from '../assets/pet-breeds.svg'
import imagesSearch from '../assets/images-search.svg'

export const Menu = () => {
  return (
    <>
      <img className="w-[106px] h-[24px]" src={logo} alt="logo" />
      <p className="black-text font-medium text-[44px] pt-[80px]">Hi intern!</p>
      <p className="gray-text pt-[10px]">Welcome to MI 2022 Front-end test</p>
      <p className="black-text font-medium text-[20px] pt-[60px]">
        Lets start using The Cat API
      </p>
      <div className="flex justify-between pt-[20px]">
        <div className="card card__voting ">
          <div className="card__image ">
            <img src={voteTable} alt="" />
          </div>
          <div className="card__button ">VOTING</div>
        </div>
        <div className="card card__breeds ">
          <div className="card__image">
            <img src={petBreeds} alt="" />
          </div>
          <div className="card__button ">BREEDS</div>
        </div>
        <div className="card card__gallery ">
          <div className="card__image">
            <img src={imagesSearch} alt="" />
          </div>
          <div className="card__button">GALLERY</div>
        </div>
      </div>
    </>
  )
}
