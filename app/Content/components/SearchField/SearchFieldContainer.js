import { connect } from 'react-redux'
import SearchField from './SearchField'
import {addArticles} from '../../actions'

const mapStateToProps = (state) => {
  return {
    source:state.source
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleAddArticles: source => {
      dispatch(addArticles(source))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchField)
