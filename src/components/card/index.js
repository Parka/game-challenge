// @flow
import React from 'react'
import type {Card as CardType} from '../../shared/types'

const Card = ({card}: {card: CardType}) =>
    <div>
        <div className='image' />
        <div className='main'>
          <div className='effect'>{card.effect}</div>
          <div className='value'>{card.value}</div>
        </div>
    </div>

export default Card
