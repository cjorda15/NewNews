import React from 'react'
import styles from './LogOut.css'

const LogOut = ({history,handleClearUser,handleShowFavorites}) => {

 const handleClickYes = () => {
   handleClearUser()
   handleShowFavorites([])
   history.history.replace('/')
 }
 const handleClickNo = () => {
   history.history.replace('/')
 }

  return(
    <div className="logout-container">
      <div className="logoutext">
        Are you sure you want to logout?
      </div>
      <div className="button-container">
        <button onClick={()=>{handleClickYes()}}>yes</button>
        <button onClick={()=>{handleClickNo()}}>no</button>
      </div>
    </div>
  )
}

export default LogOut
