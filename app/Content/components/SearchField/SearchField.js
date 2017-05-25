import React,{Component} from 'react';
import ListSourceContainer from '../ListSource/ListSourceContainer'
import ListCriteriaContainer from '../ListCriteria/ListCriteriaContainer'
import ListSourceConContainer from '../ListSource/ListSourceConContainer'
import ListSourceLibContainer from '../ListSource/ListSourceLibContainer'
import styles from './SearchField.css'

class SearchField extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  handleClick(){
    const endpoint =
 `https://newsapi.org/v1/articles?source=${this.props.source}&sortBy=top&apiKey=f70d7cc4b6fe40b3bd3b8d246eed13f9`
    fetch(endpoint).then(resp =>resp.json()).then(data => {
      const {articles} = data
      this.props.handleAddArticles(articles)
      })
    }

  blah(){
    fetch(`http://localhost:3000/api/v1/news/abc`)
      .then(response => response.json()).then(response => console.log(response))
  }

  listSource(){
    switch(this.props.criteria){
      case 'alphabetical':
        return <ListSourceContainer/>
      case 'most conservative':
        return <ListSourceConContainer/>
      case 'most liberal':
          return <ListSourceLibContainer/>
      default:
        return  <ListSourceContainer/>
      }
    }



  render(){
    return(
    <div className="search-field-container">
      <div className="search-container-criteria">
        <div className="search-container-number">
        1
        </div>
        <ListCriteriaContainer/>
      </div>
      <div className="search-container-list">
      <div className="search-container-number">
        2
      </div>
      {this.listSource()}
      </div>
      <div className="search-button-container">
        <div className="search-container-number">
        3
        </div>
        <button onClick={()=>{this.handleClick()}}>Submit</button>
      </div>
    </div>
    )
  }
}


export default SearchField
