import React from 'react'
import ArticleContainer from '../Article/ArticleContainer'
import styles from './List.css'

const List = ({articles, favorites, user,list,source}) => {

  const renderList = () => {
    let isFavorite;
    return articles.map((article,index) =>{
      if(favorites.list){
         favorites.list.forEach(fav => {
         isFavorite =  fav.description==article.description? "favorite" : "not-favorite"
      })
    }
    if(!isFavorite){
      isFavorite ="not-favorite"
    }
      return (

        <ArticleContainer
         source = {source}
         btnType ={'save'}
         user={user}
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
