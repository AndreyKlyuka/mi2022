import React, { useState } from 'react'
import votingImg from '../assets/voting-image.png'
import likeWhite from '../assets/like-white.svg'
import favouriteWhite from '../assets/favourite-white.svg'
import dislikeWhite from '../assets/dislike-white.svg'

import { VotingLog } from './VotingLog'

export const Voting = () => {
  const [logs, setLogs] = useState([
    {
      id: 'fQSunHvl8',
      reaction: 'like',
      adding: true,
      time: '22:22',
    },
    {
      id: 'HJd0XecNX',
      reaction: 'favourite',
      adding: true,
      time: '22:20',
    },
    {
      id: 'BbMFS3bU-',
      reaction: 'dislike',
      adding: true,
      time: '22:14',
    },
    {
      id: 'BbMFS3bU-',
      reaction: 'dislike',
      adding: false,
      time: '22:12',
    },
  ])

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
        {logs.map((log) => {
          return (
            <VotingLog
              time={log.time}
              id={log.id}
              adding={log.adding}
              reaction={log.reaction}
              key={log.id + log.adding}
            />
          )
        })}
      </div>
    </div>
  )
}
