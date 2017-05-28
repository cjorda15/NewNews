import React, {Component} from 'react'
import styles from  './LogIn.css'

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
    let loggedIn = false
    fetch(`http://localhost:3000/api/v1/user`)
    .then(response => response.json())
    .then(response => {
          response.forEach( account => {
          if(this.state.name.toLowerCase() == account.name.toLowerCase()){
            if(this.state.password !== account.password){
              this.setState({error:"wrong password"})
            }else{
              loggedIn = true
              }
            }
          })
          if(loggedIn){
            this.props.history.replace('/')

          }
        }).catch(error => console.log(error))
    }

    render(){
      return(
        <div className="LogIn">
          <input
            value = {this.state.name}
            onChange={(e) => {this.setState({name:e.target.value})}}
            placeholder="enter your name"/>
          <input
            value = {this.state.password}
            onChange={(e) => {this.setState({password:e.target.value})}}
            placeholder="enter your password"/>
          <button onClick={() => this.handleOnClick()}>submit</button>
          <div>
            {this.state.error}
          </div>
        </div>
      )
    }

  }


export default LogIn
