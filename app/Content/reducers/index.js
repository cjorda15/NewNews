import { combineReducers } from 'redux'
import article from './article'
import source from './source'
import searchCriteria from './searchCriteria'
import buildList from './buildList'

const rootReducer = combineReducers({
  article,
  source,
  searchCriteria,
  buildList
})

export default rootReducer
