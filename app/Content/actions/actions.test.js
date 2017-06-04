import { addArticles, addSource, changeCriteria, buildList,showFavorites,addUser, addCon, addLib} from './index.js'

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

  it('should show favorites', () => {
    const favs = {list:["bombing",'murders',"cute puppy pics"],id:99}
    const expectedAction = {
      type:"SHOW_FAVORITES",
      payload:favs
    }

    expect(showFavorites(favs)).toEqual(expectedAction)
  })

  it('should add a user', () => {
    const user = {name:"chris",id:12}
    const expectedAction = {
      type:'ADD_USER',
      user
    }

    expect(addUser(user)).toEqual(expectedAction)
  })

  it('should add a conservative vote for specific article', () => {
    const article = {id:2,key:"2Things went well today"}
    const expectedAction = {
      type:"ADD_CON",
      input:article
    }

    expect(addCon(article)).toEqual(expectedAction)
  })

  it('should add a liberal vote for specific article', () => {
    const article = {id:5,key:"5Things went well less well today"}
    const expectedAction = {
      type:"ADD_LIB",
      input:article
    }

    expect(addLib(article)).toEqual(expectedAction)
  })
})
