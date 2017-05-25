import React from 'react'
import Article from '../Article/Article'

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
    { articles ? renderList(): <div>asdfasf</div> }
    </main>
  )
}

export default List
