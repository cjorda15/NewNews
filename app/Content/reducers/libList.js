const libList = (state=[],action) => {
  switch(action.type){
    case 'ADD_LIB':
      return [action.input, ...state]
    default:
      return state
  }
}

export default libList
