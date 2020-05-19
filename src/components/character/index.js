// @flow
import React from 'react'
import type {Player as PlayerType, Monster as MonsterType} from '../../shared/types'

const Character = ({character}: {character: PlayerType | MonsterType}) =>
    <div>
      <div className='details'>
        <div className='avatar' />
        <div className='main'>
          <div className='name'>{character.name}</div>
          <div className='health'>HP: {character.hp}/{character.maxHp}</div>
        </div>
      </div>
      <div className='modifiers'> shield: {character.shield}</div>
    </div>

export default Character
