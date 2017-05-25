import React from 'react'
import ArticleContainer from '../Article/ArticleContainer'
import styles from './List.css'

const List = ({articles}) => {

  const renderList = () => {
    return articles.map((article,index) =>{
      return (
        <ArticleContainer index={index} key={index} article={article}/>
      )
    })
  }

  return(
    <main className="list-container">
    { articles ? renderList() : null }
    </main>
  )
}

export default List
