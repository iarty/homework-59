import React from 'react'
import classes from './InputGroup.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

export default function InputGroup(props) {
  return (
    <div className={classes.InputGroupWrap}>
      <Input onChange={props.inputHandler} label='Название фильма' value={props.inputValue} />
      <Button onClick={props.addFilm}>Add</Button>
    </div>
  )
}
