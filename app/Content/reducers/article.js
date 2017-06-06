const article = (state=null,action) =>{
  switch(action.type){

    case'ADD_ARTICLES':
      return action.payload

    default:
      return state
    }
}

export default article
