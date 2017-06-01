import { connect } from 'react-redux'
import Article from './Article'
import { showFavorites, addFavorite } from '../../actions'

const mapStateToProps = (state) => {
  return{
    source:state.source,
    list:state.buildList,
    user:state.user

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowFavorites: (input) => {
      dispatch(showFavorites(input))
    },
    handleAddFavorite: (input) => {
      dispatch(addFavorite(input))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Article)
