import {connect} from 'react-redux'
import {buildList} from './actions'
import React, {Component} from 'react';
import Header  from './components/Header/Header.js'
import MainContent from './components/MainContent/MainContent'
import { Route, Link, Switch } from 'react-router-dom'
import SignUpContainer from './components/SignUp/SignUpContainer'
import NavBarContainer from './components/NavBar/NavBarContainer'
import LogInContainer from './components/LogIn/LogInContainer'


class Content extends Component {
    constructor(props){
      super(props)
    }

componentDidMount(){
  fetch(`http://localhost:3000/api/v1/news`)
    .then(response => response.json()).then(response => this.props.handleBuildList(response))
}



render(){
  return(
      <div className="content">
        <NavBarContainer/>
        <Header/>

        <Switch>
          <Route path="/login" render={(history) =>  <LogInContainer history={history}/> }/>
          <Route path="/signup" render={({ history }) => <SignUpContainer history={history}/>}/>
          <Route path="/" render={({ history }) =>
          <MainContent history ={history}/> } />

          </Switch>
      </div>
  )
 }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    handleBuildList:(input) =>{
      dispatch(buildList(input))
    }
  }
}

export default connect(null,mapDispatchToProps) (Content)
