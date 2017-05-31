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
    console.log('hitclick')
    const d     = new Date()
    const month = d.getMonth()+1
    const day   = d.getDate()
    const year  = d.getFullYear()

  fetch(`http://localhost:3000/api/v1/user/users`,{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({
        name:this.state.name,
        password:this.state.password,
        updated_at: month+" "+day+" "+year
      })
    })
    .then(response => response.json())
    .then(response => this.handleResponse(response))
    .catch(
      error => console.log(error,"error-message")
    )
}

//   fetch(`http://localhost:3000/api/v1/user/users`,{
//     method:"",
//     headers:{"Content-Type": "application/json"},
//     body:JSON.stringify({
//       name:this.state.name,
//       password:this.state.password,
//       updated_at: month+" "+day+" "+year,
//       created_at: month+" "+day+" "+year
//     })
//   })
//   .then(response => response.json())
//   .then(response => this.handleResponse(response))
//   .catch(
//     error => console.log(error,"error-message")
//   )
// }

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
