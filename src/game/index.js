// @flow
import React, {useState} from 'react'
import type {Game as GameType} from '../shared/types'
import styles from './styles.module.scss'
import Character from '../components/character'
import Card from '../components/card'
import Turn from '../components/turn'

type Props = {
  disabled: bool,
  game: GameType,
  handlePlayerAction: (card?: string) => void,
  horror: bool,
}

const Game = ({disabled, game, handlePlayerAction, horror}: Props) => {
  const [selectedCard, setSelectedCard] = useState('')
  return (
    <div className={styles.wrapper} style={{pointerEvents: disabled ? 'none' : 'initial'}}>
      <div className={styles.main} style={{pointerEvents: horror ? 'none' : 'initial'}}>
        <div className={styles.characters}>
          <Character character={game.monster} />
          <Character character={game.player} horror={horror} />
        </div>
        <div className={styles.cards}  style={{opacity: disabled || horror ? 0.5 : 1}}>
        {
          game.player.cards.map(card =>
            <Card
              key={card.id}
              card={card}
              selected={card.id === selectedCard}
              onClick={() => setSelectedCard(card.id)}
            />
          )
        }
        </div>
      </div>
      <div className={styles.side}>
        <Turn
          game={game}
          onClick={() => {
            handlePlayerAction(selectedCard)
            setSelectedCard('')
          }}
        />
      </div>
    </div>
  )
}

export default Game
