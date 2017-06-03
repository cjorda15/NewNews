import React, {Component} from 'react'
import ArticleContainer from '../Article/ArticleContainer'
import styles from './Favorites.css'

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
    if(!this.props.favorites){
      return <div className="log-in-message-favs">log in or sign up please</div>
    }
    return  this.props.favorites.length>0?
              this.props.favorites.map((item,i) => {
               item.urlToImage = item.img_url
                return   <ArticleContainer
                          handleShowFavorites={this.props.handleShowFavorites}
                          user= {{id:this.props.user}}
                          key={i}
                          article={item}
                          btnType={"delete"}/>
                    })
              :
              <div className="no-favorites-message">no favorites?</div>
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
