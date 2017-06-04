const favorites = (state={},action) => {
  switch(action.type){
    case 'SHOW_FAVORITES':
      return action.payload

    case 'ADD_FAVORITES':
      const newState = Object.assign({},state)
      newState.list.push(action.input)
        return newState

    default:
        return state
  }
}

export default favorites
