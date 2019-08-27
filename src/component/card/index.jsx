import React from 'react'

export const Card = ({id, name}) => {
  return (
    <p key={id}>{name}</p>
  )
}