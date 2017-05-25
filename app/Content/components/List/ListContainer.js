import { connect } from 'react-redux'
import List from './List'
import {addSource} from '../../actions'

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleAddSource: source => {
//       dispatch(addSource(source))
//     }
//   }
// }

const mapStateToProps = (state) => {
  return{
    articles: state.article
  }
}

export default connect(mapStateToProps)(List)
