import { connect } from 'react-redux'
import SignUp from './SignUp'
import {addUser} from '../../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddUser:(user) => {
      dispatch(addUser(user))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(null,mapDispatchToProps)(SignUp)
