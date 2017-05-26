import { combineReducers } from 'redux'
import article             from './article'
import source              from './source'
import searchCriteria      from './searchCriteria'
import buildList           from './buildList'
import user                from './user'

const rootReducer = combineReducers({
  article,
  source,
  searchCriteria,
  buildList,
  user
})

export default rootReducer
