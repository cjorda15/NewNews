import React from 'react'
import { shallow, mount } from 'enzyme'
import Login from './Login'
import fetchMock from 'fetch-mock'

describe('Login test', () => {

  const userResponse = {
    data: {
      id: 1,
      name: "chris",
      password : "password"
    }
  }

  const mockCalls = () => {
    fetchMock.get('http://localhost:3000/api/v1/user/users', {
      status: 200,
      ok: true,
      body: userResponse
      })

    fetchMock.get('*', {
    status: 200,
    ok: true,
    body: userResponse
  })
}

  const wrapper = shallow(<Login/>)

  it('should render without crashing', () => {

    expect(wrapper.length).toEqual(1)

  })

  it('should have a default state', () => {
    const expected = { name: '', password: '', error: null }

    expect(wrapper.state()).toEqual(expected)
  })

  it('should change its state due to user input', () => {
    const expected = {
      name: 'tman2272@aol.com',
      password: 'tman2272@aol.com',
      error: null
    }

    wrapper.find('input').first().simulate('change', { target: { value: 'tman2272@aol.com'}})
    wrapper.find('input').last().simulate('change', { target: { value: 'tman2272@aol.com'}})

    expect(wrapper.state()).toEqual(expected)

  })

  it('should be able log in users when button is clicked', () =>{
    mockCalls()
    const spy = jest.fn()
    const wrapper = shallow(<Login handleAddUser={spy}/>)

    wrapper.find('button').simulate('click')
    expect(fetchMock.called()).toEqual(true)



  })

})
