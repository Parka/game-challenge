// @flow
import React, {useState} from "react"
import styles from "./App.module.scss"

// COMPONENTS
import Login from "./components/login"
import Game from "./game"

// TYPES
import type {Game as GameType} from "./shared/types"

// GRAPHQL
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'

const NEW_GAME = gql`
  mutation CreateGame($name: String) {
    createGame(input: {name: $name}) {
      id
      currentTurn
      maxTurns
      turnsLeft
      player{
        id
        name
        hp
        maxHp
        shield
        cards{
          id
          value
          effect
        }
      }
      monster{
        id
        name
        hp
        maxHp
        shield
        image
      }
    }
  }
`
const NEXT_TURN = gql`
  mutation NextTurn($gameId: ID, $cardId: ID!) {
    nextTurn(input: {gameId: $gameId, cardId: $cardId}) {
      game {
        id
        currentTurn
        maxTurns
        turnsLeft
        player{
          id
          name
          hp
          maxHp
          shield
          cards{
            id
            value
            effect
          }
        }
        monster{
          id
          name
          hp
          maxHp
          shield
          image
        }
      }
      monsterEffect {
        effect
        value
      }
    }
  }
`

function App() {
const [gameData, setGameData] = useState()

const [newGame, {loading: loadingGame}] = useMutation(NEW_GAME, {
  onCompleted: ({createGame}) => setGameData(createGame)
})

const [nextTurn, {data = {nextTurn: {monsterEffect: {}}}, loading}] = useMutation(NEXT_TURN, {
  onCompleted: _data => setGameData(_data.nextTurn.game)
})

const game: ?GameType = gameData
const gameId: ?string = game && game.id
const horror: bool = data.nextTurn.monsterEffect.effect === "HORROR"

return (
    <div className={styles.App}>
    {!game &&
      <Login
        handleOnLoginSubmit={(name: string):any => !loadingGame && newGame({variables: {name}})}
      />
    }
    {!!game &&
      <Game
        game={game}
        handlePlayerAction={(cardId: ?string):any => !loading && nextTurn({variables: {cardId, gameId}})}
        disabled={loading}
        horror={horror}
      />
    }
    </div>
  )
}

export default App
