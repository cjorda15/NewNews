export const addArticles = (articles) => {
  return{
    type:'ADD_ARTICLES',
    payload: articles
  }
}

export const showFavorites = (input) => {
  return{
    type:"SHOW_FAVORITES",
    payload:input
  }
}

export const addFavorite = (input) => {
  return{
    type:'ADD_FAVORITES',
    input
  }
}


export const addSource = (source) => {
  return{
    type:"ADD_SOURCE",
    source
  }
}

export const changeCriteria = (criteria) => {
  return{
    type:'CHANGE_CRITERIA',
    payload:criteria
  }
}

export const buildList = (list) => {
  return{
  type:"BUILD_LIST",
  payload:list
  }
}

export const addUser = (user) => {
  return{
    type:"ADD_USER",
    user
  }
}

export const clearUser = () => {
  return{
    type:"CLEAR_USER"
  }
}

export const addCon = (input) => {
  return{
    type:"ADD_CON",
    input
  }
}

export const addLib = (input) => {
  return{
    type:"ADD_LIB",
    input
  }
}
