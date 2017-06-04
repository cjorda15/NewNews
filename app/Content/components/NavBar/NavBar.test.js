import React from 'react'
import { shallow, mount } from 'enzyme'
import NavBar from './NavBar'

describe('NavBar test', () => {

  const wrapper = shallow(<NavBar/>)

  it('should render', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('should contain NavLinks', () =>{
    expect(wrapper.find('NavLink').length).toEqual(3)
    expect(wrapper.find('NavLink').first().hasClass('signup-link')).toEqual(true)
    expect(wrapper.find('.login-link').length).toEqual(1)
    expect(wrapper.find('logout-link').length).toEqual(0)

  })
  // 
  // it.skip('should render a different set of navlinks if a user is logged in', () =>{
  //   const user = {id:1,name:'chris'}
  //   const wrapper = mount(<NavBar user={true}/>)
  //   expect(wrapper.find('NavLink').length).toEqual(3)
  //   expect(wrapper.find('NavLink').first().hasClass('logout-link')).toEqual(true)
  //   expect(wrapper.find('.login-link').length).toEqual(1)
  //   expect(wrapper.find('logout-link').length).toEqual(0)
  // })
})
