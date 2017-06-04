import React from 'react'
import SearchFieldContainer from '../SearchField/SearchFieldContainer'
import ListContainer from '../List/ListContainer'



const MainContent = () => {
  return(
    <main className="main-container">
      <SearchFieldContainer/>
      <ListContainer/>
    </main>
  )
}

export default MainContent
