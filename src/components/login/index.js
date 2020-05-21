// @flow
import React, {useState} from "react"
import styles from './styles.module.scss'

type Props = {
  handleOnLoginSubmit: (name: string)=>void
}

const Login = ({handleOnLoginSubmit}: Props) => {
  const [name, setName] = useState('')
  return (
    <div  className={styles.main}>
      <div  className={styles.content}>
        <h1 className={styles.title}>Welcome to Bons Game</h1>
        <h2 className={styles.caption}>What&apos;s your name?</h2>
        <form onSubmit={e => {
          handleOnLoginSubmit(name)
          e.preventDefault()
        }}>
          <input
            type='text'
            className={styles.input}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='name'
          />
          <button className={styles.button}>
            Let&apos;s play
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
