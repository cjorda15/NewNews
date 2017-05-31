import React from 'react'
import LogOut from './LogOut'
import { mount, shallow } from 'enzyme'

describe('LogOut test', () => {

  const wrapper = shallow(<LogOut/>)

  it('should be able to render', () => {

    expect(wrapper.length).toEqual(1)
  })

  it('should have a className', () => {

    expect(wrapper.hasClass('logout-container')).toEqual(true)
  })

  it('should have a button that can change the history back to the root url and fires off a action to login', () => {
    const spy = jest.fn()
    let history = {
      history:{
      url: 'http://localhost:5000/logoff',
      replace: function(url) {
        return this.url = url
      }
     }
    }
    const wrapper = mount(<LogOut history={history} handleClearUser={spy}/>)
    expect(wrapper.props().history.history.url).toEqual('http://localhost:5000/logoff')
    wrapper.find('button').first().simulate('click')
     expect(spy).toHaveBeenCalled()
     expect(wrapper.props().history.history.url).toEqual('/')
  })

  it('should have another button that just changes the history back to the root url', () => {
    const spy = jest.fn()
    let history = {
      history:{
      url: 'http://localhost:5000/logoff',
      replace: function(url) {
        return this.url = url
      }
     }
    }
    const wrapper = mount(<LogOut history={history} handleClearUser={spy}/>)
    expect(wrapper.props().history.history.url).toEqual('http://localhost:5000/logoff')
    wrapper.find('button').last().simulate('click')
    expect(wrapper.props().history.history.url).toEqual('/')
  })

})
