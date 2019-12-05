import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import classes from './ChuckNorrisJokes.module.css'
import JokesList from '../../Components/JokesList/JokesList'

export default class ChuckNorrisJokes extends Component {
  state = {
    jokes: [],
    showPreloader: false
  }

  componentDidMount() {
    this.dataHandler()
  }

  dataHandler = async () => {
    this.setState({ showPreloader: true })
    const promises = [];
    for (let index = 0; index < 5; index++) {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      if (response.ok) {
        const json = await response.json();
        promises.push(json)
      } else {
        alert("Ошибка HTTP: " + response.status)
      }
    }
    const jokes = await Promise.all(promises)
    this.setState({ jokes, showPreloader: false })
  }

  clickHandler = () => {
    this.dataHandler()
  }

  render() {
    return (
      <div className={classes.Container}>
        <Header showPreloader={this.state.showPreloader} newJokes={this.clickHandler} />
        <JokesList jokes={this.state.jokes} />
      </div>
    )
  }
}
