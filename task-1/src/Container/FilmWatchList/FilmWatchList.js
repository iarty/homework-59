import React, { Component, Fragment } from 'react'
import InputGroup from '../../Components/InputGroup/InputGroup'
import WatchList from '../../Components/WatchList/WatchList'

export default class FilmWatchList extends Component {
  state = {
    inputValue: '',
    filmList: []
  }

  addFilm = () => {
    this.setState(prevState => {
      return (
        { filmList: [...prevState.filmList, prevState.inputValue], inputValue: '' }
      )
    })
  }

  inputHandler = e => {
    const value = e.target.value
    this.setState({ inputValue: value });
  }

  WatchListItemHandler = (e, index) => {
    const value = e.target.value
    this.setState(prevState => prevState.filmList.splice(index, 1, value))
  }

  removeFilm = (index) => {
    this.setState(prevState => prevState.filmList.splice(index, 1))
  }

  render() {
    return (
      <Fragment>
        <InputGroup addFilm={this.addFilm} inputHandler={this.inputHandler} inputValue={this.state.inputValue} />
        <WatchList films={this.state.filmList} removeFilm={this.removeFilm} inputHandler={this.WatchListItemHandler} />
      </Fragment>
    )
  }
}
