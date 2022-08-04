import React from 'react'

export const Grid = (props) => {
  if (props.orientation === true)
    return (
      <div className="breeds__grid">
        <div className="breeds__grid-item row-span-2">1</div>
        <div className="breeds__grid-item">2</div>
        <div className="breeds__grid-item">3</div>
        <div className="breeds__grid-item row-span-2 col-span-2">4</div>
        <div className="breeds__grid-item">5</div>
      </div>
    )
  if (props.orientation === false)
    return (
      <div className="breeds__grid">
        <div className="breeds__grid-item">1</div>
        <div className="breeds__grid-item">2</div>
        <div className="breeds__grid-item row-span-2">3</div>
        <div className="breeds__grid-item row-span-2 col-span-2">4</div>
        <div className="breeds__grid-item">5</div>
      </div>
    )
}
