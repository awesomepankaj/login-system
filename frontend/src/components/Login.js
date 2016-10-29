import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    }) 
  }

  handleSubmit = () => {

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user)

    fetch('http://0.0.0.0' + ':' + '3000' + '/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(user)
    })
  }
  
  render() {
    return (
      <div className='loginContainer'>   
        <div className="header">
          Welcome to Dalai Lama Archive
        </div>
        <div className='body'>
          <TextField
            hintText="dalailama"
            value={this.state.username}
            floatingLabelText="User Name"
            onChange={this.onChangeUsername} 
          />
          <br />
          <TextField
            hintText=""
            value={this.state.password}
            floatingLabelText="Password"
            onChange={this.onChangePassword} 
          />
          <br />
          <RaisedButton label="Submit" primary={true} onTouchTap={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}
