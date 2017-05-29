import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from  './NavBar.css'


const NavBar = props => {


  return (
    <div className="nav-bar-container">
      <NavLink className="nav-link center" activeClassName='selected' to={'/signup'}> Signup </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/login'}> Login </NavLink>
      <NavLink className="nav-link" activeClassName='selected' to={'/'}> Home </NavLink>

    </div>
  )
}



export default NavBar
