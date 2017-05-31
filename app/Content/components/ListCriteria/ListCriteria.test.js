import React from 'react'
import ListCriteria from './ListCriteria'
import { shallow, mount } from 'enzyme'


describe('ListCriteria test' , () => {
  const spy = jest.fn()
  const wrapper = shallow(<ListCriteria handleChangeCriteria={spy}/>)

  it('should render', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('should be a select element',() => {
    expect(wrapper.node.type).toEqual('select')
  })

  it('should have three options within it',() => {
    expect(wrapper.find('option').length).toEqual(3)
  })

  it('should fire off a change if one of its options are selected',() => {
    wrapper.simulate('change',{target :{value:'most conservative'}})
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith('most conservative')

    wrapper.simulate('change',{target :{value:'most liberal'}})
    expect(spy).toBeCalledWith('most liberal')

  })
})
