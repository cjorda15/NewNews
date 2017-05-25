const source = (state = "",action) =>{
    switch (action.type) {
      case 'ADD_SOURCE':
      console.log("hit")
        return action.source

      default:
        return state

    }
}

export default source
