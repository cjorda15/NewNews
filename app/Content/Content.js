import {connect} from 'react-redux'
import {buildList} from './actions'
import React, {Component} from 'react';
import Header  from './components/Header/Header.js'
import SearchFieldContainer from './components/SearchField/SearchFieldContainer'
import ListContainer from './components/List/ListContainer'

class Content extends Component {
    constructor(props){
      super(props)
    }

componentDidMount(){
  fetch(`http://localhost:3000/api/v1/news`)
    .then(response => response.json()).then(response => this.props.handleBuildList(response))
}
render(){
  return(
      <div className="content">
        <Header/>
        <SearchFieldContainer/>
        <ListContainer/>
      </div>
  )
 }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    handleBuildList:(input) =>{
      dispatch(buildList(input))
    }
  }
}

export default connect(null,mapDispatchToProps) (Content)
