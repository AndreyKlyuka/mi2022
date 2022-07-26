import React from 'react'
import votingImg from '../assets/voting-image.png'
import likeWhite from '../assets/like-white.svg'
import favouriteWhite from '../assets/favourite-white.svg'
import dislikeWhite from '../assets/dislike-white.svg'

import { VotingLog } from './VotingLog'
const logs = [
  {
    id: 'fQSunHvl8',
    reaction: 'Like',
  },
  {
    id: 'BbMFS3bU-',
    reaction: 'Favourite',
  },
  {
    id: 'HJd0XecNX ',
    reaction: 'Dislike',
  },
]
export const Voting = () => {
  return (
    <div>
      <div className="voting__image">
        <img src={votingImg} alt="cat :)" />
      </div>
      <div className="relative">
        <div className=" absolute voting__frame">
          <div className="bg-[#97EAB9] rounded-l-[15.5px] voting__icon">
            <img src={likeWhite} alt="" />
          </div>
          <div className=" bg-[#FF868E] voting__icon">
            <img src={favouriteWhite} alt="" />
          </div>
          <div className=" bg-[#FFD280] rounded-r-[15.5px] voting__icon">
            <img src={dislikeWhite} alt="" />
          </div>
        </div>
      </div>
      <div className="voting__logs">
        <VotingLog
          id={logs[0].id}
          action={'added to'}
          reaction={logs[0].reaction}
        />
        <VotingLog
          id={logs[1].id}
          action={'added to'}
          reaction={logs[1].reaction}
        />
        <VotingLog
          id={logs[2].id}
          action={'added to'}
          reaction={logs[2].reaction}
        />
        <VotingLog
          id={logs[0].id}
          action={'removed from'}
          reaction={logs[0].reaction}
        />
      </div>
    </div>
  )
}
