import React from 'react'
import Input from '../../UI/Input/Input'
import CloseBtn from '../../UI/Close/Close'
import classes from './WatchListItem.module.css'



export default function WatchListItem({ onChange, value, removeFilm, index }) {
  return (
    <div className={classes.WatchListItem}>
      <Input value={value} onChange={onChange} />
      <CloseBtn onClick={removeFilm} index={index} />
    </div>
  )
}
