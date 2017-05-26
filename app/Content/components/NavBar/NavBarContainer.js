import { connect } from 'react-redux'
import { NavBar } from './NavBar'

const mapStateToProps = state => {
  return { name: state.user }
}

export default connect(mapStateToProps)(NavBar)
