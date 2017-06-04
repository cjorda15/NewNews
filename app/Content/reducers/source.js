const source = (state = "abc-news-au",action) =>{
    switch (action.type) {
      case 'ADD_SOURCE':
        return action.source

      default:
        return state

    }
}

export default source
