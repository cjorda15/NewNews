import React from 'react'
import Article from './Article'
import { shallow, mount } from 'enzyme'


describe('Article test', () => {
  const article=
  {urlToImage:"newsImg",title:"Invade iran",url:'http:blah',description:"We invaded"}
  const wrapper = shallow(<Article list={["weee"]} article={article}/>)

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

  it('should have two elements that can be clicked' ,() => {
    const spy = jest.fn()
  })

})
