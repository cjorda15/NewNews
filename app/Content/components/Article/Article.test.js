import React from 'react'
import Article from './Article'
import { shallow, mount } from 'enzyme'
import fetchMock from 'fetch-mock'


describe('Article test', () => {
  const article=
  {urlToImage:"newsImg",title:"Invade iran",url:'http:blah',description:"We invaded"}

  const wrapper = shallow(<Article user={{id:2}} list={["weee"]} article={article}/>)

  const favResponse = {
    data: {
      id: 2,
      extra_key:"2ANDHEREWEGO"
    }
  }

  const mockCalls = () => {
    fetchMock.post('http://localhost:3000/api/v1/favorites', {
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
}


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

  it('should hande a save on the article',() => {
    mockCalls()
    const spy = jest.fn()
    const wrapper = shallow(<Article list={["weee"]} article={article}/>)
    const saveBtn = wrapper.find('button')
    saveBtn.simulate('click')
    console.log(saveBtn);
  })

})
