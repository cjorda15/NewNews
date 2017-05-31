import React, {Component} from 'react'
import Article from '../Article/Article'

class Favorites extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
        fetch(`http://localhost:3000/api/v1/favorites/favs`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            id: this.props.user
          })
        })
        .then( response => response.json())
        .then( res => { this.props.handleShowFavorites({list:res, id: this.props.user})
        })
  }

  renderFavorites(){
  return  this.props.favorites?
                    this.props.favorites.map((item,i) => {
                      item.urlToImage = item.img_url
                   return   <Article key={i} article={item}/>
                    })
                    :
                    <div>no favorites?</div>
 }
  render(){
  return(
    <div className="favorites-container">
      {this.renderFavorites()}
    </div>
  )
 }
}
export default Favorites
