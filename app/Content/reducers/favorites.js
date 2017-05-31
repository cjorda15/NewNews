const favorites = (state=[],action) => {
  switch(action.type){
    case 'SHOW_FAVORITES':
      return action.payload
    default:
        return state
  }
}

export default favorites
