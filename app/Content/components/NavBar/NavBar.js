import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from  './NavBar.css'


const NavBar = props => {

  const renderNavBar = () => {
    return props.user?(
    <div className="nav-bar-container">
      <NavLink className="nav-link center" activeClassName='selected' to={'/logout'}> logout </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/favorites'}> favorites </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>
    </div>)
    :(
    <div className="nav-bar-container">
      <NavLink className="nav-link center" activeClassName='selected' to={'/signup'}> Signup </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/login'}> Login </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>
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
