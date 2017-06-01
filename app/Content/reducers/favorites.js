const favorites = (state=[],action) => {
  switch(action.type){
    case 'SHOW_FAVORITES':
      return action.payload
    case 'ADD_FAVORITES':
      const newState = [...state.list]
      newState.push(action.input)
      return newState
    default:
        return state
  }
}

export default favorites
