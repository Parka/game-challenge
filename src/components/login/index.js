// @flow
import React, {useState} from "react"
import styles from './styles.module.scss'

const Login = ({handleOnLoginSubmit}: {handleOnLoginSubmit: (string)=>void}) => {
  const [name, setName] = useState('')
  return (
    <div  className={styles.main}>
      <div  className={styles.content}>
        <h1 className={styles.title}>Welcome to Bons Game</h1>
        <h2 className={styles.caption}>What's your name?</h2>
        <input
          type='text'
          className={styles.input}
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='name'
        />
        <button
          className={styles.button}
          onClick={() => handleOnLoginSubmit(name)}>
          Let's play
        </button>
      </div>
    </div>
  )
}

export default Login
