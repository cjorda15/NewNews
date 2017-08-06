import React from 'react'
import Article from './Article'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'


describe('Article test', () => {

  const favResponse = {
    data: {
      id: 2,
      extra_key:"2ANDHEREWEGO"
    }
  }

  const mockCalls = () => {
    fetchMock.post('api/v1/favorites', {
      status: 200,
      ok: true,
      body: favResponse
    })

   fetchMock.get('*', {
    status: 200,
    ok: true,
    body: favResponse
   })

   fetchMock.post('*', {
    status: 200,
    ok: true,
    body: favResponse
    })

  fetchMock.delete('*', {
    status: 200,
    ok: true,
    body: favResponse
    })
 }

  mockCalls()

  const article=
  {urlToImage:"newsImg",title:"Invade iran",url:'http:blah',description:"We invaded"}
  const spyFav = jest.fn()
  const spyCon = jest.fn()
  const spyLib = jest.fn()
  const spyList = jest.fn()
  const wrapper = shallow(<Article
                            handleShowFavorites={spyFav}
                            handleAddCon = {spyCon}
                            handleAddLib = {spyLib}
                            handleBuildList = {spyList}
                            user={{id:2}}
                            list={["weee"]}
                            article={article}
                            useSource={{conservative:12,liberal:23}}/>)

  it('should render without crashing', () => {
  expect(wrapper.length).toEqual(1)
  })

  it('should have a className',() => {
    expect(wrapper.hasClass('article')).toEqual(true)
  })

  it('should be a article element' ,() => {
    expect(wrapper.node.type).toEqual('article')
  })

  it('should have a top, middle, and bottom of the card' ,() => {
   expect(wrapper.find('.top-of-card').length).toEqual(1)
   expect(wrapper.find('.middle-of-card').length).toEqual(1)
   expect(wrapper.find('.bottom-card').length).toEqual(1)
  })

  it('should handle api calls when mounted',() => {
    mockCalls()
    const spy = jest.fn()
    const wrapper = shallow(<Article
                              handleShowFavorites={spyFav}
                              handleAddCon = {spyCon}
                              handleAddLib = {spyLib}
                              handleBuildList = {spyList}
                              handleShowFavorites={spyFav}
                              user={{id:1,name:"chris"}}
                              list={["weee"]}
                              article={article}
                              useSource={{conservative:12,liberal:23}}/>)
    expect(fetchMock.called()).toEqual(true)
  })

  it('should make a api to log political votes on news source for conservatives', () => {
    const mockCallsCon = () => {
      fetchMock.put('http://localhost:3000/api/v1/news', {
        status: 200,
        ok: true,
        body: favResponse
        })
 }
    mockCallsCon()
    const spy = jest.fn()
    const wrapper = shallow(<Article
                              handleShowFavorites={spyFav}
                              handleAddCon = {spyCon}
                              handleAddLib = {spyLib}
                              handleBuildList = {spyList}
                              handleShowFavorites={spyFav}
                              user={{id:1,name:"chris"}}
                              list={["weee"]}
                              article={article}
                              useSource={{conservative:12,liberal:23}}/>)
    const conBtn = wrapper.find('.con-img')
    conBtn.simulate('click');
    expect(fetchMock.called()).toEqual(true)
 })
 it('should make a api to log political votes on news source for conservatives', () => {
   const mockCallsLib = () => {
     fetchMock.put('/api/v1/news', {
       status: 200,
       ok: true,
       body: favResponse
       })
}
   mockCallsLib()
   const spy = jest.fn()
   const wrapper = shallow(<Article
                             handleShowFavorites={spyFav}
                             handleAddCon = {spyCon}
                             handleAddLib = {spyLib}
                             handleBuildList = {spyList}
                             handleShowFavorites={spyFav}
                             user={{id:1,name:"chris"}}
                             list={["weee"]}
                             article={article}
                             useSource={{conservative:12,liberal:23}}/>)
   const conBtn = wrapper.find('.lib-img')
   conBtn.simulate('click');
   expect(fetchMock.called()).toEqual(true)
})
})
