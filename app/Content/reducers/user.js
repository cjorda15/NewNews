const user = (state=null,action) => {
  switch(action.type){
    case 'ADD_USER':
      return action.user

    case 'CLEAR_USER':
      return null

    default:
      return state

  }
}

export default user;
