// @flow
import React, {useState} from "react"

const Login = ({handleOnLoginSubmit}: {handleOnLoginSubmit: (string)=>void}) => {
  const [name, setName] = useState('')
  return (
    <div>
      <h1>Welcome to Bons Game</h1>
      <h2>What's your name?</h2>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => handleOnLoginSubmit(name)}> Let's play </button>
    </div>
  )
}

export default Login
