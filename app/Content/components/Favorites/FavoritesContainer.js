import React from 'react'
import { connect } from 'react-redux'
import Favorites from './Favorites'
import { showFavorites } from '../../actions'


const mapStateToProps = (state) => {
  return {
    favorites : state.favorites.list,
    user      : state.user.id
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleShowFavorites:(input) => {
      dispatch(showFavorites(input))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Favorites)
