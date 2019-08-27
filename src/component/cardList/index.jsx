import React from 'react';
import { Card } from '../card'

export const CardList = ({monsterList}) => {
  return (
    <div>     
      {monsterList.map(monster => <Card key={monster.id} name={monster.name}/>)}
    </div>
  )
}