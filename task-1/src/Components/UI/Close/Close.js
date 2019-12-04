import React, { Fragment } from 'react';
import classes from './Close.module.css'

export default function Close() {
  return (
    <Fragment>
      <button className={classes.Close}>
        <span>×</span>
      </button>
    </Fragment>
  )
}
