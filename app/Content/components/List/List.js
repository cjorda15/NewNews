import React from 'react'
import ArticleContainer from '../Article/ArticleContainer'
import styles from './List.css'

const List = ({articles, favorites, user}) => {

  const renderList = () => {
    let isFavorite = "not-favorite"
    return articles.map((article,index) =>{
      if(favorites.list){
        favorites.list.forEach(fav => {
        if(fav.description==article.description){
          isFavorite = "favorite"
        }else{
          isFavorite = "not-favorite"

        }

      })
    }
      return (

        <ArticleContainer
         index={index}
         key={index}
         article={article}
         isFavorite={isFavorite}/>
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
