// @flow
import React from 'react'
import type {Game as GameType} from '../shared/types'
import Character from '../components/character'
import Card from '../components/card'
import Turn from '../components/turn'

const Game = ({game}: {game: GameType}) => {
  return (
    <div>
      <div className='main'>
        <div className='characters'>
          <Character character={game.monster} />
          <Character character={game.player} />
        </div>
        <div className='cards'>
        {
          game.player.cards.map(card =>
            <Card key={card.id} card={card}/>
          )
        }
        </div>
      </div>
      <div className='turns'>
        <Turn game={game}/>
      </div>
    </div>
  )
}

export default Game
