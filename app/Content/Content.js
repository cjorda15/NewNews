import { connect } from 'react-redux'
import { buildList, showFavorties, addArticles } from './actions'
import React, { Component } from 'react';
import Header  from './components/Header/Header.js'
import MainContent from './components/MainContent/MainContent'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import SignUpContainer from './components/SignUp/SignUpContainer'
import NavBarContainer from './components/NavBar/NavBarContainer'
import LogInContainer from './components/LogIn/LogInContainer'
import LogOutContainer from './components/LogOut/LogOutContainer'
import FavoritesContainer from './components/Favorites/FavoritesContainer'
import { apiGetNews } from './apiHelper'

class Content extends Component {
    constructor(props){
      super(props)
    }
  componentDidMount(){
    apiGetNews(this.props.handleBuildList.bind(this),this.props.handleAddArticles.bind(this))
  }

render(){
  return(
      <div className="content">
        <NavBarContainer/>
        <Header/>
        <Switch>
          <Route path="/logout" render={(history) => {
          return !this.props.user?
            <Redirect to='/' />
             :
            <LogOutContainer history={history}/> } } />
          <Route path="/login" render={(history) => {
            return this.props.user?
           <Redirect to='/' />
             :
           <LogInContainer history={history}/> }}/>
          <Route path="/signup" render={({ history }) => {
            return this.props.user?
            <Redirect to='/' />
              :
            <SignUpContainer history={history}/>}}/>
          <Route path="/favorites" render={({history}) => {
            return !this.props.user?
            <Redirect to='/' />
              :
            <FavoritesContainer history={history}/>}}/>
          <Route path="/" render={({ history }) =>
          <MainContent history ={history}/> } />
        </Switch>
      </div>
  )
 }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleBuildList:(input) => {
      dispatch(buildList(input))
    },
    handleShowFavorites:(input) => {
      dispatch(showFavorties(input))
    },
    handleAddArticles:(input) => {
      dispatch(addArticles(input))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Content)
