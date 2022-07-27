import React from 'react'
import likeLogs from '../assets/like-logs.svg'
import favouriteLogs from '../assets/favourite-logs.svg'
import dislikeLogs from '../assets/dislike-logs.svg'

export const VotingLog = (props) => {
  const reaction =
    props.reaction === 'like'
      ? likeLogs
      : props.reaction === 'favourite'
      ? favouriteLogs
      : dislikeLogs

  return (
    <div className="voting__action ">
      <div className="voting__time ">{props.time}</div>
      <div className="voting__text ">
        {'Image ID:'}
        &nbsp;
        <b>{props.id}</b>
        &nbsp;
        {props.adding === true
          ? `added to ${
              props.reaction.charAt(0).toUpperCase() + props.reaction.slice(1)
            }`
          : `revomed from ${
              props.reaction.charAt(0).toUpperCase() + props.reaction.slice(1)
            }`}
      </div>
      <div className="voting__reaction ">
        <img src={props.adding === false ? null : reaction} alt="" />
      </div>
    </div>
  )
}
