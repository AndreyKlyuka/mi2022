import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = (props) => {
  const pageHandler = () => {
    props.onClick(props.to)
  }
  return (
    <div className={`card ${props.class}`} onClick={pageHandler}>
      <div className="card__image ">
        <img src={props.img} alt={`${props.to} card`} />
      </div>
      <div className="card__button ">
        <NavLink to={`/${props.to}`}>{props.buttonText}</NavLink>
      </div>
    </div>
  )
}
