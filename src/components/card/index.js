// @flow
import React from 'react'
import type {Card as CardType} from '../../shared/types'
import styles from './styles.module.scss'

type Props = {
  card: CardType,
  onClick:any,
  selected: bool
}

const Card = ({card, onClick, selected}: Props) =>
    <div className={[styles.main, selected ? styles.selected : ''].join(' ')} onClick={onClick}>
        <div className={styles.image} style={{backgroundImage: `url('https://via.placeholder.com/200x200?text=${card.effect}')`}}/>
        <div className={styles.details}>
          <div className={styles.effect}>{card.effect.toLowerCase()}</div>
          <div className={styles.value}>+{card.value}</div>
        </div>
    </div>

export default Card
