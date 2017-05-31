const user = (state="",action) => {
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
