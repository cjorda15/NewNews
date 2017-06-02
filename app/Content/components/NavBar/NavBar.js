import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from  './NavBar.css'


const NavBar = ({user}) => {

  const renderNavBar = () => {
    return user?(
    <div className="nav-bar-container">
      <NavLink className="nav-link logout-link" activeClassName='selected' to={'/logout'}> logout  ({ ( user.name )}) </NavLink>
      <NavLink className="nav-link favorites-link" activeClassName='selected' to={'/favorites'}> saved </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> home </NavLink>
    </div>)
    :(
    <div className="nav-bar-container">
      <NavLink className="nav-link signup-link" activeClassName='selected' to={'/signup'}> Signup </NavLink>
      <NavLink className="nav-link login-link" activeClassName='selected' to={'/login'}> Login </NavLink>
      <NavLink className="nav-link home-link" activeClassName='selected' to={'/'}> home </NavLink>
    </div>
      )
  }
  return(
    <div>
    {renderNavBar()}
    </div>
  )
}



export default NavBar
