const conList = (state=[],action) => {
  switch(action.type){
    case 'ADD_CON':
      return [action.input, ...state]
    default:
      return state
  }
}

export default conList
