import React, {Component} from 'react'
import Todo from './Components/Todo'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      list: ['stuff', 'more stuff']
    }
    this.addEvent = this.addEvent.bind(this)
  }

  handleChange = (task) => {
    this.setState({
      userInput: task
    })
  }

  addEvent() {
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    console.log(this.state.userInput)
    console.log(this.state.list)
    let mappedList = this.state.list.map((task, index) => {
      return <Todo key={index} display={task}/>
    })
    return (
      <div className='App'>
        <h2>My to-do list:</h2>
        <br />
        <input onChange={(e) => this.handleChange(e.target.value)} placeholder='Enter new task'/>
        <button onClick={this.addEvent}>Add</button>
        <nr />
        {mappedList}
      </div>
    )
  }
}

export default App