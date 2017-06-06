import React, { Component } from 'react'
import styles from  './LogIn.css'
import { apiLogin } from './apiHelper'

class LogIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      password:"",
      error: null
    }
  }

  handleOnClick(){
    apiLogin(this.state.name,this.state.password,this.handleResponse.bind(this))
 }

  handleResponse(input){
    input.user[0]?(
                  this.props.handleAddUser({name:input.user[0].name ,id:input.user[0].id }),
                  this.props.history.history.replace('/'))
                  :
                  this.setState({error:"hmm, try another user or password"})
  }

  render(){
    return(
      <div className="login">
        <input
          value = {this.state.name}
          onChange={(e) => {this.setState({name:e.target.value})}}
          placeholder="enter your name"/>
        <input
          value = {this.state.password}
          onChange={(e) => {this.setState({password:e.target.value})}}
          placeholder="enter your password"/>
        <button onClick={() => this.handleOnClick()}>submit</button>
        <div className="error-message">
          {this.state.error}
        </div>
      </div>
    )
  }

  }


export default LogIn
