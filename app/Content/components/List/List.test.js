import React from 'react'
import List from './List'
import { shallow, mount } from 'enzyme'



describe('List test',() => {
  const article = [{stuff:'asdf'},{stuff2:'asdf'}]
  const wrapper = mount(<List />)


  it('should render',() => {
    expect(wrapper.length).toEqual(1)
  })

  it('should be a main element', () => {
    expect(wrapper.hasClass('list-container')).toEqual(true)
  })
})
