import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = (props) => {
  const pageHandler = () => {
    props.onClick(props.to)
  }
  return (
    <NavLink to={`/${props.buttonText}`}>
      <div className={`card ${props.class}`} onClick={pageHandler}>
        <div className="card__image ">
          <img src={props.img} alt={`${props.to} card`} />
        </div>
        <div className="card__button ">{props.buttonText.toUpperCase()}</div>
      </div>
    </NavLink>
  )
}
