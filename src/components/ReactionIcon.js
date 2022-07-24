import React from 'react'
import { NavLink } from 'react-router-dom'

export const ReactionIcon = (props) => {
  return (
    <NavLink to={`/${props.link}`}>
      <div className="reaction-icons">
        <img src={props.img} alt={props.link} />
      </div>
    </NavLink>
  )
}
