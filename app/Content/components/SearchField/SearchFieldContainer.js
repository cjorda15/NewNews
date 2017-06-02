import { connect } from 'react-redux'
import SearchField from './SearchField'
import {addArticles, buildList} from '../../actions'

const mapStateToProps = (state) => {
  return {
    source:state.source,
    criteria:state.searchCriteria
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleAddArticles: source => {
      dispatch(addArticles(source))
    },
    handleBuildList: input => {
      dispatch(buildList(input))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchField)
