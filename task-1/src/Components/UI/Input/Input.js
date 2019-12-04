import React, { Component } from 'react'
import classes from './Input.module.css'

export default class Input extends Component {
  componentDidUpdate() {

  }
  render() {
    const { value, onChange, label } = { ...this.props }
    return (
      <div className={classes.InputGroup}>
        <input className={classes.Input} type="text" value={value} onChange={onChange} required />
        <span className={classes.InputBar}></span>
        {label
          ?
          <label className={classes.Label}>{label}</label>
          :
          null}
      </div>
    )
  }
}

