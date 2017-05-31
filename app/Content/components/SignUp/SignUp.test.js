import React from 'react'
import { mount, shallow } from 'enzyme'
import SignUp from './SignUp'

describe('SignUp test', () => {
  const wrapper = shallow(<SignUp/>)
  const userResponse = {
    data: {
      id: 1,
      name: "chris",
      password : "password"
    }
  }

  const mockCalls = () => {
    fetchMock.get(`https://newsapi.org/v1/articles?source=${this.props.source}&sortBy=top&apiKey=f70d7cc4b6fe40b3bd3b8d246eed13f9`, {
      status: 200,
      ok: true,
      body: {list:'arrayOfArticles'}
      })

   fetchMock.get('*', {
    status: 200,
    ok: true,
    body: {list:'arrayOfArticles'}
  })
}


  it('should render', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('should have a className', () => {
    expect(wrapper.hasClass('signup')).toEqual(true)
  })

  it('should have a default state', () => {
    const expected = {
      name:"",
      password:"",
      retypePassword:"",
      error:null
    }
    expect(wrapper.state()).toEqual(expected)
  })
})
