import { connect } from 'react-redux'
import ListSource from './ListSource'
import {addSource} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddSource: source => {
      dispatch(addSource(source))
    }
  }
}

export default connect(null,mapDispatchToProps)(ListSource)
