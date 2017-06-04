import article from './article'
import source from './source'
import searchCriteria from './searchCriteria'
import buildList from './buildList'
import conList from './conList'
import libList from './libList'
import favorites from './favorites'
import user from './user'

describe('article reducer test', () => {

  it('should return state by default', () => {
    expect(article( null, {})).toEqual(null)
  })


  it('should add a article', () => {

    const articles = ["just in","snow men","are taking over"]
    const action = {
      type: 'ADD_ARTICLES',
      payload:["just in","snow men","are taking over"]
    }

    expect(article(null, action)).toEqual(articles)
  })

  it('should return the same state if a action it doesnt recognize its dispatched action',() => {

    const action = {
      type: 'ADD_STUFF',
      payload:["just in","snow men","are taking over"]
    }

    expect(article(null,action)).toEqual(null)
  })
})

describe("source reducer test", () => {

  it('should return a given source for state by default', () => {

    expect(source( "abc-news-au", {})).toEqual("abc-news-au")
  })

  it('should add a new source', () => {

    const expectedState = "nbc"
    const action = {
      type:'ADD_SOURCE',
      source:'nbc'
    }

    expect(source(null,action)).toEqual(expectedState)
  })

  it('should return the same state if a action it doesnt recognize its dispatched action',() => {

    const action = {
      type: 'ADD_STUFF',
      payload:["just in","people with meh","are taking over"]
    }

    expect(source(null,action)).toEqual(null)
  })
})

describe('searchCriteria' , () => {

    it('should return a given source for state by default', () => {

      expect(source( "alphabetical", {})).toEqual("alphabetical")
    })

    it('should add a new criteria', () => {

      const expectedState = "most liberal"
      const action = {
        type:'ADD_SOURCE',
        source:'most liberal'
      }

      expect(source(null,action)).toEqual(expectedState)
    })

    it('should return the same state if a action it doesnt recognize  it is dispatched',() => {

      const action = {
        type: 'ADD_STUFF',
        payload:"COMMUNISIM"
      }

      expect(source(null,action)).toEqual(null)
    })
})

describe('buildList' , () => {

    it('should return a given source for state by default', () => {

      expect(source( [], {})).toEqual([])
    })

    it('should add a list', () => {

      const expectedState = ["NEWS","MORE NEWS","MOST NEWS"]
      const action = {
        type:'BUILD_LIST',
        payload:["NEWS","MORE NEWS","MOST NEWS"]
      }

      expect(buildList([],action)).toEqual(expectedState)
    })

    it('should return the same state if a action it doesnt recognize  its dispatched action',() => {

      const action = {
        type: 'ADD_STUFF',
        payload:"COMMUNISIM"
      }

      expect(buildList([],action)).toEqual([])
    })
})

describe('conList reducer test', () => {

  it('should return state by default', () => {
    expect(article( [], {})).toEqual([])
  })


  it('it should add a article for the conservative list', () => {

    const articles = {id:1,extra_key:"1JIMBOJOE"}
    const action = {
      type: 'ADD_CON',
      input: articles
    }

    expect(conList([], action)).toEqual([articles])
  })

  it('should return the same state if a action it doesnt recognize its dispatched action',() => {

    const action = {
      type: 'ADD_STUFF',
      payload:["just in","snow men","are taking over"]
    }

    expect(article([],action)).toEqual([])
  })
})

describe('libList reducer test', () => {

  it('should return state by default', () => {
    expect(article( [], {})).toEqual([])
  })


  it('it should add a article for the liberal list', () => {

    const articles = {id:2,extra_key:"2KillaKid"}
    const action = {
      type: 'ADD_LIB',
      input: articles
    }

    expect(libList([], action)).toEqual([articles])
  })

  it('should return the same state if a action it doesnt recognize its dispatched action',() => {

    const action = {
      type: 'ADD_STUFF',
      payload:["just in","snow men","are taking over"]
    }

    expect(article([],action)).toEqual([])
  })
})

describe('favorites reducer test', () => {

  it('should return state by default', () => {
    expect(favorites( {}, {})).toEqual({})
  })


  it('it should add a article for favorites', () => {

    const articles = {id:2,extra_key:"2KillaKid"}
    const action = {
      type: 'SHOW_FAVORITES',
      payload: articles
    }

    expect(favorites({}, action)).toEqual(articles)
  })

  it('should return the same state if a action it doesnt recognize its dispatched action',() => {

    const action = {
      type: 'ADD_STUFF',
      payload:["just in","snow men","are taking over"]
    }

    expect(favorites({},action)).toEqual({})
  })
})

describe('user reducer test', () => {

  it('should return state by default', () => {
    expect(user( {}, {})).toEqual({})
  })


  it('it should add a user', () => {

    const userInfo = {id:2,name:"Patrick"}
    const action = {
      type: 'ADD_USER',
      user:userInfo
    }

    expect(user({}, action)).toEqual(userInfo)
  })

  it('should clear user info', () => {
    const action = {
      type:"CLEAR_USER"
    }
    expect(user({id:5,name:"rob"},action)).toEqual("")
  })

  it('should return the same state if a action it doesnt recognize its dispatched action',() => {

    const action = {
      type: 'ADD_STUFF',
      payload:["just in","snow men","are taking over"]
    }

    expect(user({},action)).toEqual({})
  })
})
