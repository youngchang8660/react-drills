import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foodArray: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }


  render() {
    const mappedFoodArray = this.state.foodArray.map(food => {
      return <h2>{food}</h2>
    })
    return (
      <div className='App'>
        {mappedFoodArray}
      </div>
    )
  }
}

export default App
