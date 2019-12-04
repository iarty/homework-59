import React from 'react'
import classes from './WatchList.module.css'
import WatchListItem from './WatchListItem/WatchListItem'

export default function WatchList() {
  return (
    <div className={classes.WatchList}>
      <WatchListItem />
      <WatchListItem />
      <WatchListItem />
      <WatchListItem />
      <WatchListItem />
    </div>
  )
}
