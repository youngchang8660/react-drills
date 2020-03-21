import React, {Component} from 'react'
import Todo from './Todo'

class List extends Component {

    render() {
        let mappedList = this.props.list.map((element, index) => {
            return <Todo key={index} task={element} />
        })
        return (
            <div>
                {mappedList}
            </div>
        )
    }
}

export default List