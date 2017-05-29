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
    let id ;
    let name;
    fetch(`http://localhost:3000/api/v1/user`)
    .then(response => response.json())
    .then(response => {
          response.forEach( account => {
          if(this.state.name.toLowerCase() == account.name.toLowerCase()){
            if(this.state.password !== account.password){
              this.setState({error:"wrong password"})
            }else{
              name = account.name
              id = account.id
              loggedIn = true
              }
            }else{
              this.setState({error:"no user by that name.."})
            }
          })
          if(loggedIn){
            this.props.handleAddUser({name ,id })
            this.props.history.history.replace('/')
          }
        }).catch(error => console.log(error))
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
