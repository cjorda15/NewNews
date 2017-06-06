import React, { Component } from 'react'
import {apiAddUser} from './apiHelper'
import styles from  './SignUp.css'

class SignUp extends Component {

  constructor(){
    super()
    this.state = {
      name:"",
      password:"",
      retypePassword:"",
      error:null
    }
  }

  createUser(input){
    this.props.handleAddUser({id:input[0],name:this.state.name})
    this.props.history.replace('/')
  }

  handleClick(){
    apiAddUser(this.state.name,this.state.password,this.state.retypePassword,this.createUser.bind(this),this.setState.bind(this))
  }

  render(){
    return(
      <div className="signup">
        <input
          type = "text"
          placeholder = "enter your name"
          value = {this.state.name}
          onChange={(e)=>{this.setState({name:e.target.value,error:""})}}/>
        <input
          type = "text"
          placeholder = "enter your password"
          value = {this.state.password}
          onChange={(e)=>{this.setState({password:e.target.value,error:""})}}/>
        <input
          type = "text"
          placeholder = "enter your password again"
          value = {this.state.retypePassword}
          onChange={(e)=>{this.setState({retypePassword:e.target.value,error:""})}}/>
        <button  onClick={() => {this.handleClick()}}>Submit</button>
        <div className="error-message">{this.state.error}</div>
      </div>
    )
  }
}


export default SignUp
