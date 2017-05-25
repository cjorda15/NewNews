import React from 'react';
import Header  from './components/Header/Header.js'
import SearchFieldContainer from './components/SearchField/SearchFieldContainer'
import ListContainer from './components/List/ListContainer'

const Content = ()=>{
  return(
      <div className="content">
        <Header/>
        <SearchFieldContainer/>
        <ListContainer/>
      </div>
  )
}

export default Content
