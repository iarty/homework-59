import React from 'react'
import Input from '../../UI/Input/Input'
import CloseBtn from '../../UI/Close/Close'
import classes from './WatchListItem.module.css'



export default function WatchListItem() {
  return (
    <div className={classes.WatchListItem}> 
      <Input />
      <CloseBtn />
    </div>
  )
}
