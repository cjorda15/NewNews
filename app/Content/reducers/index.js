import { combineReducers } from 'redux'
import article from './article'
import source from './source'

const rootReducer = combineReducers({
  article,
  source
})

export default rootReducer
