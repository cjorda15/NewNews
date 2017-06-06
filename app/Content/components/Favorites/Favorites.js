import React, { Component } from 'react'
import ArticleContainer from '../Article/ArticleContainer'
import styles from './Favorites.css'
import { apiShowFavorites } from './apiHelper'

class Favorites extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    apiShowFavorites(this.props.user,this.props.handleShowFavorites.bind(this))
  }

  renderFavorites(){
    if(!this.props.favorites){
      return <div
              className="log-in-message-favs">
              log in or sign up please
             </div>
    }
    const useSource ={conservative:0, liberal:0}
    return  this.props.favorites.length>0?
              this.props.favorites.map((item,i) => {
               item.urlToImage = item.img_url
                return <ArticleContainer
                          useSource = {useSource}
                          handleShowFavorites={this.props.handleShowFavorites}
                          user= {{id:this.props.user}}
                          key={i}
                          article={item}
                          btnType={"delete"}/>
                })
                 :
               <div className="no-favorites-message">keeping articles not your thing?</div>
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
