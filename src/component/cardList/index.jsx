import React from 'react';
import { Card } from '../card'
import './card-list-style.css'

export const CardList = ({monsterList}) => {
  return (
    <div className='card-list'>     
      {monsterList.map(monster => <Card key={monster.id} monster={monster}/>)}
    </div>
  )
}