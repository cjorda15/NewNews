import React, { Component } from 'react'
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



  createUser(){
    const d     = new Date()
    const month = d.getMonth()+1
    const day   = d.getDate()
    const year  = d.getFullYear()

      fetch(`http://localhost:3000/api/v1/user`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            name:this.state.name,
            password:this.state.password,
            created_at: month+" "+day+" "+year,
            updated_at: month+" "+day+" "+year
          })
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
  }

  handleClick(){
    let inUse = false;
    if(!this.state.name||!this.state.password||!this.state.retypePassword){
      this.setState({error:"please enter all the information that is required "})
      return null
    }

    if(this.state.password!==this.state.retypePassword){
      this.setState({error:"password must match"})
      return null
    }else{

      fetch(`http://localhost:3000/api/v1/user`)
      .then(response => response.json())
      .then(response => {
            response.forEach( account => {
            if(this.state.name.toLowerCase() == account.name.toLowerCase()){
              this.setState({error:"user name already taken"})
              inUse = true
              }
            })
            if(!inUse){
              this.createUser()
              this.props.history.replace('/')

            }
          }).catch(error => console.log(error))
      }
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
