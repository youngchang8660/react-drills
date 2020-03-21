import React, {Component} from 'react'
import NewTask from './Components/NewTask'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className='App'> 
        <h1>My to-do list:</h1>
        <NewTask />
      </div>
    )
  }
}


export default App
