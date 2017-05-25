const searchCriteria = (state = "alphabetical", action) => {
  switch (action.type) {
    case 'CHANGE_CRITERIA':
      return action.payload
    default:
      return state
  }
}

export default searchCriteria
