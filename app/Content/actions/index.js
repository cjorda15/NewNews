export const addArticles = (articles) => {
  return{
    type:'ADD_ARTICLES',
    payload: articles
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
