import React, { Component } from 'react'
import styles from  './SignUp.css'

class SignUp extends Component {

  constructor(){
    super()
    this.state = {
      name:"",
      email:"",
      password:"",
      retypePassword:""
    }
  }
  render(){

  return(
    <div className="signup">
      <input
        type = "text"
        placeholder = "enter your name"
        value = {this.state.name}
        onChange={(e)=>{this.setState({name:e.target.value})}}/>
      <input
        type = "text"
        placeholder = "enter your email"
        value = {this.state.email}
        onChange={(e)=>{this.setState({email:e.target.value})}}/>
      <input
        type = "text"
        placeholder = "enter your password"
        value = {this.state.password}
        onChange={(e)=>{this.setState({password:e.target.value})}}/>
      <input
        type = "text"
        placeholder = "enter your password again"
        value = {this.state.retypePassword}
        onChange={(e)=>{this.setState({retypePassword:e.target.value})}}/>

    </div>
  )
  }
}


export default SignUp
