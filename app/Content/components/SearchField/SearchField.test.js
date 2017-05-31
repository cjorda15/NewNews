import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchField from './SearchField';

describe('SearchField test', () => {

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
  const wrapper = shallow(<SearchField criteria={'alphabetical'}/>)

  it('should render', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('fire off a action that had collected data from a api', () => {
    const spy = jest.fn()
    const wrapper = shallow(<SearchField
                            criteria="alphabetical"
                            source="abc"
                            handleAddArticles={spy}/>)

    wrapper.find('button').simulate('click')                        
    expect(spy).toHaveBeenCalled()
  })
})
