import React from 'react'
import styles from './Article.css'
import knex from 'knex'

const Article = ({article,source,list}) => {


  const handleOnClick = (type) => {

     const useSourse = list.filter(item => {
      return source===item.source? item:null
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
      .then( res => {
      })

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
          <img
            onClick={() => handleOnClick('conservative')}
            className= "middle-of-card-img con-img"
            src={'https://d30y9cdsu7xlg0.cloudfront.net/png/29046-200.png'}
          />
          <img
            onClick={() => handleOnClick('liberal')}
            className= "middle-of-card-img lib-img"
            src={`https://d30y9cdsu7xlg0.cloudfront.net/png/66721-200.png`}/>
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
