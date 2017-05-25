import React from 'react'
import styles from './Article.css'
import knex from 'knex'

const Article = ({article,source}) => {


  const handleOnClick = (type) => {
    console.log(type,source)

      // fetch(`http://localhost:3000/api/v1/news/${source}`, {
      //   method: "PUT",
      //   headers: {"Content-Type": "application/json"},
      //   body: JSON.stringify({
      //         source: source,
      //         conservative: 10000,
      //         liberal:999999
      //       })
      // })
      // .then(response => response.json())
      // .then( res => {
      //   console.log(res)
      // })

  // 
}


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
          <button
          onClick={() => handleOnClick('conservative')}
          className= "middle-of-card-button conservative">con</button>
          <button
           onClick={() => handleOnClick('liberal')}
           className= "middle-of-card-button liberal">lib</button>
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
