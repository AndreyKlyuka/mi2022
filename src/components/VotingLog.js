import React from 'react'
import likeLogs from '../assets/like-logs.svg'
import favouriteLogs from '../assets/favourite-logs.svg'
import dislikeLogs from '../assets/dislike-logs.svg'

export const VotingLog = (props) => {
  let reaction = null
  if (props.reaction === 'Like') reaction = likeLogs
  if (props.reaction === 'Favourite') reaction = favouriteLogs
  if (props.reaction === 'Dislike') reaction = dislikeLogs
  return (
    <div className="voting__action ">
      <div className="voting__time ">22:25</div>
      <div className="voting__text ">{`Image ID: ${props.id} was added to ${props.reaction}`}</div>
      <div className="voting__reaction ">
        <img src={reaction} alt="" />
      </div>
    </div>
  )
}
