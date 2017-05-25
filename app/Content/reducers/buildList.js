const buildList = (state=[],action) => {
  switch(action.type){
    case 'BUILD_LIST':
      return action.payload
    default:
        return state
  }
}

export default buildList
