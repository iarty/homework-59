import React from 'react'
import classes from './Input.module.css'

export default function Input(props) {
  return (
    <div className={classes.InputGroup}>
      <input className={classes.Input} type="text" required/>
      <span className={classes.InputBar}></span>
      <label className={classes.Label}>Имя</label>
    </div>
  )
}
