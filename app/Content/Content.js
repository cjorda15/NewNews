import React from 'react';
import Header  from './components/Header/Header.js'
import SearchFieldContainer from './components/SearchField/SearchFieldContainer'

const Content = ()=>{
  return(
      <div className="content">
        <Header/>
        <SearchFieldContainer/>
      </div>
  )
}

export default Content
