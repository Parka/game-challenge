// @flow
import React from 'react'
import type {Card as CardType} from '../../shared/types'
import styles from './styles.module.scss'

const Card = ({card, onClick}: {card: CardType, onClick:any}) =>
    <div className={styles.main} onClick={onClick}>
        <div className={styles.image} style={{backgroundImage: `url('https://via.placeholder.com/200x200?text=${card.effect}')`}}/>
        <div className={styles.details}>
          <div className={styles.effect}>{card.effect.toLowerCase()}</div>
          <div className={styles.value}>+{card.value}</div>
        </div>
    </div>

export default Card
