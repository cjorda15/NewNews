import React from 'react'
import Article from '../Article/Article'
import styles from './List.css'

const List = ({articles}) => {

  const renderList = () => {
    return articles.map((article,index) =>{
      return (
        <Article index={index} key={index} article={article}/>
      )
    })
  }

  return(
    <main className="list-container">
    { articles ? renderList(): null }
    </main>
  )
}

export default List
