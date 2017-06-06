import React,{Component} from 'react';
import ListSourceContainer from '../ListSource/ListSourceContainer'
import ListCriteriaContainer from '../ListCriteria/ListCriteriaContainer'
import ListSourceConContainer from '../ListSource/ListSourceConContainer'
import ListSourceLibContainer from '../ListSource/ListSourceLibContainer'
import {apiBuildList} from './apiHelper'
import styles from './SearchField.css'

class SearchField extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  handleClick(){
    apiBuildList(this.props.handleBuildList.bind(this),this.addArticles.bind(this))
  }

  addArticles(){
    const endpoint =
    `https://newsapi.org/v1/articles?source=${this.props.source}&sortBy=top&apiKey=f70d7cc4b6fe40b3bd3b8d246eed13f9`
    fetch(endpoint)
    .then(resp =>resp.json())
    .then(data => {
      const {articles} = data
      this.props.handleAddArticles(articles)
    })
  }

  updateList(){
    fetch(`http://localhost:3000/api/v1/news`)
      .then(response => response.json())
      .then(response => this.props.handleBuildList(response))
  }

  listSource(){
    switch(this.props.criteria){
      case 'alphabetical':
        return <ListSourceContainer handleNewList={this.handleClick.bind(this)}/>
      case 'most conservative':
        return <ListSourceConContainer handleNewList={this.handleClick.bind(this)}/>
      case 'most liberal':
          return <ListSourceLibContainer handleNewList={this.handleClick.bind(this)}/>
      default:
        return  <ListSourceContainer handleNewList={this.handleClick.bind(this)}/>
      }
    }

  render(){
    return(
    <div className="search-field-container">
      <div className="search-container-criteria">
        <ListCriteriaContainer handleNewList={this.handleClick.bind(this)}/>
      </div>
      <div className="search-container-list">
      {this.listSource()}
      </div>
    </div>
    )
  }
}


export default SearchField
