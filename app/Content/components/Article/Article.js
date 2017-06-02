import React, {Component} from 'react'
import styles from './Article.css'
import knex from 'knex'

class Article extends Component {
  constructor(props){
    super(props)
    this.state = {bottomCardMessage:""}
  }


  componentWillMount(){

    if(this.props.user){
        fetch(`http://localhost:3000/api/v1/favorites/favs`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            id: this.props.user.id
          })
        })
        .then( response => response.json())
        .then( res => { this.props.handleShowFavorites({list:res, id: this.props.user.id})
        })
    }
  }


  handleOnClick(type){
   const date =  Date.now()

   const useSource = this.props.list.find(article => {
      if(article.source == this.props.source){
        return article
      }
    })
  fetch(`http://localhost:3000/api/v1/news`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      id: useSource.id,
      type: type,
      updated_at:date
    })
  })
    .then(response => response.json())
    .catch(error => console.log(error,"error message"))
}

  handleFavorites(){
    const key =this.props.user.id+this.props.article.title
    const d     = new Date()
    const month = d.getMonth()+1
    const day   = d.getDate()
    const year  = d.getFullYear()
    console.log(key)
    this.props.user?

    (this.setState({bottomCardMessage:""}),
     fetch(`http://localhost:3000/api/v1/favorites`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title:this.props.article.title,
        description: this.props.article.description,
        author:this.props.article.author,
        source:this.props.source,
        extra_key:key,
        url: this.props.article.url,
        img_url:this.props.article.urlToImage,
        user_id: this.props.user.id,
        created_at:month+" "+day+" "+year,
        updated_at:month+" "+day+" "+year
      })
    }).then(response => response.json())
      .then(response => this.props.handleAddFavorite(response))
      .catch(error => console.log(error,"error message")))
    :
    this.setState({bottomCardMessage:"You need to be logged in to select a favorite"})
  }

  renderFavoriteButton(){

    return this.props.isFavorite == "favorite" ?
                <button className="unfavorite-button" onClick={()=>{console.log("wooooooo")}}>Unfavorite</button>
                :
                <button className="favorite-button" onClick={()=>{this.handleFavorites()}}>Favorites</button>

  }

  render(){
  return(
    <article className = "article">
     <div
        className = "top-of-card"
        style={{ backgroundImage: `url(${this.props.article.urlToImage})` }}
      >
      <div className="card-content">
        <span className="card-background-container">{this.props.article.title}</span>
      </div>
      </div>
      <div className = "middle-of-card">
        <a className = "middle-of-card-link" href={this.props.article.url}>link to article</a>
        <div className = "middle-of-card-button-container">
          {this.renderFavoriteButton()}
          <img
            onClick={() => this.handleOnClick('conservative')}
            className= "middle-of-card-img con-img"
            src={'https://d30y9cdsu7xlg0.cloudfront.net/png/29046-200.png'}
          />
          <img
            onClick={() => this.handleOnClick('liberal')}
            className= "middle-of-card-img lib-img"
            src={`https://d30y9cdsu7xlg0.cloudfront.net/png/66721-200.png`}/>
        </div>
      </div>
      <div className = "bottom-card">
        <div className="bottom-message">{this.state.bottomCardMessage}</div>
        <div className="bottom-card-content">{this.props.article.description}
        </div>
      </div>
    </article>
  )
 }
}
export default Article
