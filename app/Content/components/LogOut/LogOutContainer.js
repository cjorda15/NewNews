import React from 'react'
import {connect} from 'react-redux'
import LogOut from './Logout'
import {clearUser} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return{
    handleClearUser:(input) => {
      dispatch(clearUser(input))
    }
  }
}

export default connect(null, mapDispatchToProps)(LogOut)
