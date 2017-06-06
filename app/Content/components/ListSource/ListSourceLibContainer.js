import { connect } from 'react-redux'
import ListSourceLib from './ListSourceLib'
import { addSource } from '../../actions'

const mapStateToProps = (state) => {
  return {
    list:state.buildList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddSource: source => {
      dispatch(addSource(source))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListSourceLib)
