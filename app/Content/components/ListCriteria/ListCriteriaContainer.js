import {connect} from 'react-redux'
import ListCriteria from './ListCriteria'
import {changeCriteria} from '../../actions'


const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeCriteria: (input) => {
      dispatch(changeCriteria(input))
    }
  }
}


export default connect(null,mapDispatchToProps)(ListCriteria)
