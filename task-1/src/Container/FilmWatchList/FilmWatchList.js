import React, { Component, Fragment } from 'react';
// import classes from './FilmWatchList.module.css'
import InputGroup from '../../Components/InputGroup/InputGroup'
import WatchList from '../../Components/WatchList/WatchList';

export default class FilmWatchList extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <InputGroup />
        <WatchList />
      </Fragment>
    )
  }
}
