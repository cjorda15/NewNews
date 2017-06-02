import { connect } from 'react-redux'
import List from './List'
import {addSource} from '../../actions'


const mapStateToProps = (state) => {
  return{
    articles:  state.article,
    favorites: state.favorites,
    list    :  state.buildList
  }
}

export default connect(mapStateToProps)(List)
