import {connect} from 'react-redux'
import Article from './Article'


const mapStateToProps = (state) => {
  return{
    source:state.source
  }
}



export default connect(mapStateToProps)(Article)
