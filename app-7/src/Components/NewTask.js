import React, {Component} from 'react'
import List from './List'

class NewTask extends Component {
    constructor() {
        super()
        this.state = {
            list: []
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
            list: [...this.state.list, this.state.userInput]
        })
    }

    render() {
        console.log(this.state.userInput)
        console.log(this.state.list)
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)} placeholder='Enter new task'/>
                <button onClick={this.addEvent}>Add</button>
                <br />
                <List list={this.state.list}/>
            </div>
        )
    }
}


export default NewTask