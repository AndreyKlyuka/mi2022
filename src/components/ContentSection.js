import React from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import { Voting } from './Voting'

export const ContentSection = (props) => {
  if (props.currentPage === 'voting')
    return (
      <div className="content ">
        <div className="flex ">
          <div className="button-back">
            <img src={arrowLeft} alt="arrow left" />
          </div>
          <div className="current">{props.currentPage.toUpperCase()}</div>
        </div>
        <Voting />
      </div>
    )

  if (props.currentPage === 'breeds')
    return (
      <div className="content ">
        <div className="flex ">
          <div className="button-back">
            <img src={arrowLeft} alt="arrow left" />
          </div>
          <div className="current">{props.currentPage.toUpperCase()}</div>
          <div>all breeds</div>
        </div>
      </div>
    )

  if (props.currentPage === 'gallery')
    return (
      <div className="content ">
        <div className="flex ">
          <div className="button-back">
            <img src={arrowLeft} alt="arrow left" />
          </div>
          <div className="current">{props.currentPage.toUpperCase()}</div>
        </div>
      </div>
    )
}
