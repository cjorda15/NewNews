import React, {Component} from 'react'
import styles from './Article.css'
import knex from 'knex'

class Article extends Component {
  constructor(props){
    super(props)
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

     const useSourse = this.props.list.filter(item => {
      return this.props.source===item.source? item:null
     })

      const date =  Date.now()
      fetch(`http://localhost:3000/api/v1/news`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          id: useSourse[0].id,
          type: type,
          updated_at:date
        })
      })
      .then( response => response.json())
      .then( res => {})
}

  handleFavorites(){
    const d     = new Date()
    const month = d.getMonth()+1
    const day   = d.getDate()
    const year  = d.getFullYear()
    this.props.user.id?
    (this.props.handleAddFavorite(this.props.article),
    fetch(`http://localhost:3000/api/v1/favorites`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        title:this.props.article.title,
        description: this.props.article.description,
        source:this.props.source,
        url: this.props.article.url,
        img_url:this.props.article.urlToImage,
        user_id: this.props.user.id,
        created_at:month+" "+day+" "+year,
        updated_at:month+" "+day+" "+year
      })
    })
    .catch(error => console.log(error,"error message")))
    :
    alert("you need to sign in to include a favorite")
  }

  renderFavoriteButton(){
    return this.props.isFavorite == "not-favorite" ?
                <button className="favorite-button" onClick={()=>{this.handleFavorites()}}>Favorites</button>
                :
                <button className="unfavorite-button" onClick={()=>{console.log("wooooooo");}}>Unfavorite</button>

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
        <div className="bottom-card-content">{this.props.article.description}
        </div>
      </div>
    </article>
  )
 }
}
export default Article
