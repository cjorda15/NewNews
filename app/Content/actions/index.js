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
