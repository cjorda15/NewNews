import React from 'react'
import { shallow, mount } from 'enzyme'
import MainContent from './MainContent'

describe('MainContent test', () => {
  const wrapper = shallow(<MainContent/>)

  it('should render', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('should have a className', () => {
  expect(wrapper.hasClass('main-container')).toEqual(true)
  })

  it('should render itself as a main element', () => {
    expect(wrapper.node.type).toEqual('main')
  })
})
