import React from 'react'
import styles from './LogOut.css'

const LogOut = ({history,handleClearUser}) => {

 const handleClickYes = () => {
   handleClearUser()
   history.history.replace('/')
 }
 const handleClickNo = () => {
   history.history.replace('/')
 }

  return(
    <div className="logout-container">
      Are you sure you want to logout?
      <div className="button-container">
      <button onClick={()=>{handleClickYes()}}>yes</button>
      <button onClick={()=>{handleClickYes()}}
      >no</button>
      </div>
    </div>
  )
}

export default LogOut
