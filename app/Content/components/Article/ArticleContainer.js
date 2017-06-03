import { connect } from 'react-redux'
import Article from './Article'
import { showFavorites, addFavorite, buildList, addCon, addLib } from '../../actions'

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
    },
    handleBuildList: (input) => {
      dispatch(buildList(input))
    },
    handleAddCon: (input) => {
      dispatch(addCon(input))
    },
    handleAddLib: (input) => {
      dispatch(addLib(input))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Article)
