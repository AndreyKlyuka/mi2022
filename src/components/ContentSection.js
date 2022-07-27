import React from 'react'
import { Voting } from './Voting'
import { Breeds } from './Breeds'
import { Gallery } from './Gallery'

import arrowLeft from '../assets/arrow-left.svg'

export const ContentSection = (props) => {
  // if (props.currentPage === 'voting')
  return (
    <div className="content ">
      <div className="flex ">
        <div className="button-back">
          <img src={arrowLeft} alt="arrow left" />
        </div>
        <div className="current">{props.currentPage.toUpperCase()}</div>
        {props.children}
      </div>
      {props.currentPage === 'voting' ? (
        <Voting />
      ) : props.currentPage === 'breeds' ? (
        <Breeds />
      ) : (
        <Gallery />
      )}
    </div>
  )

  // if (props.currentPage === 'breeds')
  //   return (
  //     <div className="content ">
  //       <div className="flex ">
  //         <div className="button-back">
  //           <img src={arrowLeft} alt="arrow left" />
  //         </div>
  //         <div className="current">{props.currentPage.toUpperCase()}</div>
  //         <div>all breeds</div>
  //       </div>
  //     </div>
  //   )

  // if (props.currentPage === 'gallery')
  //   return (
  //     <div className="content ">
  //       <div className="flex ">
  //         <div className="button-back">
  //           <img src={arrowLeft} alt="arrow left" />
  //         </div>
  //         <div className="current">{props.currentPage.toUpperCase()}</div>
  //         <div>all gallery</div>
  //       </div>
  //     </div>
  //   )
}
