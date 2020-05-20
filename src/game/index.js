// @flow
import React from 'react'
import type {Game as GameType} from '../shared/types'
import styles from './styles.module.scss'
import Character from '../components/character'
import Card from '../components/card'
import Turn from '../components/turn'

const Game = ({game}: {game: GameType}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.characters}>
          <Character character={game.monster} />
          <Character character={game.player} />
        </div>
        <div className={styles.cards}>
        {
          game.player.cards.map(card =>
            <Card key={card.id} card={card}/>
          )
        }
        </div>
      </div>
      <div className={styles.side}>
        <Turn game={game}/>
      </div>
    </div>
  )
}

export default Game
