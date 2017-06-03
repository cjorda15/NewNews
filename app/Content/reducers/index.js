import { combineReducers } from 'redux'
import article             from './article'
import source              from './source'
import searchCriteria      from './searchCriteria'
import buildList           from './buildList'
import user                from './user'
import favorites           from './favorites'
import conList             from './conList'
import libList             from './libList'

const rootReducer = combineReducers({
  article,
  source,
  searchCriteria,
  buildList,
  user,
  favorites,
  conList,
  libList
})

export default rootReducer
