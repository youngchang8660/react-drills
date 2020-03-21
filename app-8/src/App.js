import React, {Component} from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lukeSkywalker: ''
    }
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/1`)
    .then(res => {
      this.setState({
        lukeSkywalker: res.data
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Name: {this.state.lukeSkywalker.name}</h1>
        <h1>Birth Year: {this.state.lukeSkywalker.birth_year}</h1>
        <h1>height: {this.state.lukeSkywalker.height}</h1>
        <h1>Eye Color: {this.state.lukeSkywalker.eye_color}</h1>
      </div>
    )
  }
}


export default App
