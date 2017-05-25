import {connect} from 'react-redux'
import Article from './Article'


const mapStateToProps = (state) => {
  return{
    source:state.source,
    list:state.buildList,
  }
}



export default connect(mapStateToProps)(Article)
