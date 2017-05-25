import React from 'react'
import styles from './Article.css'

const Article = ({article}) => {

  return(
    <article className = "article">
     <div
     className = "top-of-card"
     style={{ backgroundImage: `url(${article.urlToImage})` }}
      >
      <div className="card-content">
        <span className="card-background-container">{article.title}</span>
      </div>
      </div>
      <div className = "middle-of-card">
        <a className = "middle-of-card-link" href={article.url}>link to article</a>
        <div className = "middle-of-card-button-container">
          <button className= "middle-of-card-button conservative">conservative</button>
          <button className= "middle-of-card-button liberal">liberal</button>
        </div>
      </div>
      <div className = "bottom-card">
        <div className="bottom-card-content">{article.description}
        </div>
      </div>
    </article>
  )
}

export default Article
