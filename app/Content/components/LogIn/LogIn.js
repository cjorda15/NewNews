import React, {Component} from 'react'
import styles from  './LogIn.css' 

class LogIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:"",
      password:""
    }
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
        </div>
      )
    }

  }


export default LogIn
