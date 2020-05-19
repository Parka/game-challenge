// @flow
import React from 'react'
import type {Game as GameType} from '../../shared/types'

const Turn = ({game}: {game: GameType}) =>
    <div>
        <div className='title'> Turns </div>
        <div className='main'>
          <div className='turn_variable'>
            <div className='name'>current</div>
            <div className='value'>{game.currentTurn}</div>
          </div>
          <div className='turn_variable'>
            <div className='name'>left</div>
            <div className='value'>{game.maxTurns - game.currentTurn}</div>
          </div>
        </div>
        <button>end turn</button>
    </div>

export default Turn
