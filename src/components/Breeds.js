import React from 'react'
import { Grid } from './Grid'

export const Breeds = () => {
  return (
    <div className="breeds__content ">
      <Grid orientation={true} />
      <Grid orientation={false} />
      <Grid orientation={true} />
    </div>
  )
}
