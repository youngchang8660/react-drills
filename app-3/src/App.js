import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foodArray: ['Spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      userInput: value
    })
  }

  render() {
    console.log(this.state.userInput)
    // const foodDisplay = this.state.foodArray.map(food => {
    //   return <h2>{food}</h2>
      let foodDisplay = this.state.foodArray.filter(food => {
        return food.includes(this.state.userInput)
        })
        .map(food => {
          return <h2>{food}</h2>
      })
    
    
    return (
      <div className='App'>
        <input onChange={(event) => this.handleChange(event.target.value)}/>
        {foodDisplay}
      </div>
    )
  }
}

export default App
