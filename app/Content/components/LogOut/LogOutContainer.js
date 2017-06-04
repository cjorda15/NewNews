import React from 'react'
import {connect} from 'react-redux'
import LogOut from './Logout'
import {clearUser, showFavorites} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return{
    handleClearUser:(input) => {
      dispatch(clearUser(input))
    },
    handleShowFavorites:(input) => {
      dispatch(showFavorites(input))
    }
  }
}

export default connect(null, mapDispatchToProps)(LogOut)
