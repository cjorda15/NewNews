import article from './article'
import source from './source'
import searchCriteria from './searchCriteria'
import buildList from './buildList'

describe('article reducer test', () => {

  it('it should return state by default', () => {
    expect(article( null, {})).toEqual(null)
  })


  it('it should add a article', () => {

    const articles = ["just in","snow men","are taking over"]
    const action = {
      type: 'ADD_ARTICLES',
      payload:["just in","snow men","are taking over"]
    }

    expect(article(null, action)).toEqual(articles)
  })

  it('should return the same state if a action it doesnt recognize it is dispatched',() => {

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

  it('should return the same state if a action it doesnt recognize it is dispatched',() => {

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

    it('should return the same state if a action it doesnt recognize   it is dispatched',() => {

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

    it('should return the same state if a action it doesnt recognize   it is dispatched',() => {

      const action = {
        type: 'ADD_STUFF',
        payload:"COMMUNISIM"
      }

      expect(buildList([],action)).toEqual([])
    })
})
