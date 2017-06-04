import React from 'react'
import List from './List'
import { shallow, mount } from 'enzyme'



describe('List test',() => {
  const article = [{stuff:'asdf'},{stuff2:'asdf'}]
  const wrapper = mount(<List article={article}/>)


  it('should render',() => {
    expect(wrapper.length).toEqual(1)
  })

  // it.skip('should be a main element', () => {
  //   console.log(wrapper)
  // })
})
