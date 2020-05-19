// @flow
import React from "react"
import "./App.css"
import Login from "./components/login"
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
const [newGame, {data}] = useMutation(NEW_GAME)
console.log(data || 'NO DATA')
return (
    <div className='App'>
      <Login
        handleOnLoginSubmit={(name: string):void => newGame({variables: {name}})}
      />
    </div>
  )
}

export default App
