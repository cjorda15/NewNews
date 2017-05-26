import { addArticles, addSource, changeCriteria, buildList } from './index.js'

describe('actions test',() => {

  it('should add articles', () => {
    const articles = [{source:"cnn"},{source:"fox"},{source:'Msnbc'}]
    const expectedAction = {
      type:"ADD_ARTICLES",
      payload:articles
    }

    expect(addArticles(articles)).toEqual(expectedAction)
  })

  it('should add sources', () => {
    const source = "cnn"
    const expectedAction = {
      type:"ADD_SOURCE",
      source
    }

    expect(addSource(source)).toEqual(expectedAction)
  })

  it('should change criteria',() => {
    const criteria = "most liberal"
    const expectedAction = {
      type:"CHANGE_CRITERIA",
      payload:criteria
    }

    expect(changeCriteria(criteria)).toEqual(expectedAction)
  })

  it('should build a list', () => {
    const list = ["cnn","fox","msnbc"]
    const expectedAction = {
      type:"BUILD_LIST",
      payload: list
    }

    expect(buildList(list)).toEqual(expectedAction)
  })
})
