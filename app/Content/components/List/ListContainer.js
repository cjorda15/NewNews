import { connect } from 'react-redux'
import List from './List'
import {addSource} from '../../actions'


const mapStateToProps = (state) => {
  return{
    articles:  state.article,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps)(List)
