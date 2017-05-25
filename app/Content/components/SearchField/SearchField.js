import React,{Component} from 'react';
import ListSourceContainer from '../ListSource/ListSourceContainer'

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

  render(){
    return(
    <div className="search-field-container">
      <div className="search-container-criteria">
        <div className="search-container-number">
        1
        </div>
          <select>
            <option>
              alphabetical
            </option>
            <option>
              most conservative
            </option>
            <option>
              most liberal
            </option>
          </select>
      </div>
      <div className="search-container-list">
      <div className="search-container-number">
        2
      </div>
        <ListSourceContainer/>
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
