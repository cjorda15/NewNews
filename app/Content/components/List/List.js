import React from 'react'
import ArticleContainer from '../Article/ArticleContainer'
import styles from './List.css'

const List = ({articles, favorites, user,list,source}) => {

  const renderList = () => {
    let isFavorite;

    const useSource = list.find(article => {
      if(article.source == source){
        return article
         }
       })

    return articles.map((article,index) =>{
      return (
        <ArticleContainer
          useSource={useSource}
          source = {source}
          btnType ={'save'}
          user={user}
          index={index}
          key={index}
          article={article}
        />
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
