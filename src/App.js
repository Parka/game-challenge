// @flow
import React from "react"
import "./App.css"

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
function App() {
const [newGame, {data = {}}] = useMutation(NEW_GAME)

const game: GameType = data.createGame

return (
    <div className='App'>
    {!game &&
      <Login
        handleOnLoginSubmit={(name: string):void => newGame({variables: {name}})}
      />
    }
    {!!game &&
      <Game game={game}/>
    }
    </div>
  )
}

export default App
