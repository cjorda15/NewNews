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

  createUser(input){
    input.name=='error'?
                        this.setState({error:"user name already taken"})
                        :
                        (this.props.handleAddUser({id:input[0],name:this.state.name}),
                        this.props.history.replace('/'))
  }

  handleClick(){
    const d     = new Date()
    const month = d.getMonth()+1
    const day   = d.getDate()
    const year  = d.getFullYear()

    if(!this.state.name||!this.state.password||!this.state.retypePassword){
      this.setState({error:"please enter all the information that is required "})
      return null
    }

    if(this.state.password!==this.state.retypePassword){
      this.setState({error:"passwords must match"})
      return null
    }else{
      fetch(`http://localhost:3000/api/v1/user/`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            name:this.state.name,
            password:this.state.password,
            updated_at: month+" "+day+" "+year,
            created_at: month+" "+day+" "+year
          })
        })
        .then(response => response.json())
        .then(response => this.createUser(response))
        .catch( error => {console.log(error,"error-message")})
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
