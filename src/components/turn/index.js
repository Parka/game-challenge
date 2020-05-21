// @flow
import React from 'react'
import type {Game as GameType} from '../../shared/types'
import styles from './styles.module.scss'

const Turn = ({game, onClick}: {game: GameType, onClick: any}) =>
    <div className={styles.main}>
        <div className={styles.title}> Turns </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.turn_variable}>
              <div className={styles.name}>current</div>
              <div className={styles.value}>{game.currentTurn}</div>
            </div>
            <div className={styles.turn_variable}>
              <div className={styles.name}>left</div>
              <div className={styles.value}>{game.maxTurns - game.currentTurn}</div>
            </div>
          </div>
          <button className={styles.button} onClick={onClick}>end turn</button>
      </div>
    </div>

export default Turn
