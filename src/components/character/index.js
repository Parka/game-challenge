// @flow
import React from 'react'
import type {Player as PlayerType, Monster as MonsterType} from '../../shared/types'
import styles from './styles.module.scss'

const Character = ({character}: {character: PlayerType | MonsterType}) =>
    <div className={styles.main}>
      <div className={styles.details}>
        <div
          className={styles.avatar}
          style={{backgroundImage: `url(${String(character.image || '') || 'https://via.placeholder.com/200x200?text=player'})`}}
        />
        <div className={styles.content}>
          <div className={styles.name}>{character.name.toLowerCase()}</div>
          <div className={styles.health}><span>HP: </span>{character.hp}/{character.maxHp}</div>
        </div>
      </div>
      <div className={styles.modifiers}><span>Shield: </span>{character.shield}</div>
    </div>

export default Character
