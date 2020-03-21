import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
          username: '',
          password: ''
        }
      }

    handleChange = (name) => {
        this.setState({
          username: name
        })
      }
    
      handlePassword = (pass) => {
        this.setState({
          password: pass
        })
      }
    
      loginButton() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
      }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)}/>
                <input onChange={(e) => this.handlePassword(e.target.value)}/>
                <button onClick={() => this.loginButton()}>Login</button>
            </div>
        )
    }
}

export default Login