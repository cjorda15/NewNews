import { connect } from 'react-redux'
import Article from './Article'
import { showFavorites } from '../../actions'

const mapStateToProps = (state) => {
  return{
    source:state.source,
    list:state.buildList,
    user:state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowFavorites: (input) =>{
      dispatch(showFavorites(input))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Article)
