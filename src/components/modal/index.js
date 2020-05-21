// @flow
import React from "react"
import styles from './styles.module.scss'

const Modal = ({children}: {children: any}) =>
  <div className={styles.main}>
    <div className={styles.content}>
      {children}
    </div>
  </div>

export default Modal
