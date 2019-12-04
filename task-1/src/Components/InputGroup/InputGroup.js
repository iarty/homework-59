import React from 'react'
import classes from './InputGroup.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

export default function InputGroup() {
  return (
    <div className={classes.InputGroupWrap}>
      <Input />
      <Button>Add Movie</Button>
    </div>
  )
}
