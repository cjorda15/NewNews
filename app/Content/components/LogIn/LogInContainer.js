import { connect } from 'react-redux'
import LogIn from './LogIn'
import { addUser } from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return{
    handleAddUser:(info) => {
      dispatch(addUser(info))
    }
  }
}



export default connect(null, mapDispatchToProps)(LogIn)
