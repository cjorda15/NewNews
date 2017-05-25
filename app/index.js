import React, { Component } from 'react'
import { render } from 'react-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'
import promiseMiddleware from 'redux-promise'
import createHistory from 'history/createBrowserHistory'



import Content from './Content/Content'
import rootReducer from './Content/reducers'

const history = createHistory()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools, applyMiddleware(promiseMiddleware))




class Root extends Component {
  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
  }

  render() {
    return (
      <Provider store={store}>
        <Content/>
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('main'))
