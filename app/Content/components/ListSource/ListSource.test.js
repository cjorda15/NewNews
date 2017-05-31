import React from 'react'
import { shallow, mount} from 'enzyme'
import ListSource from './ListSource'
import ListSourceCon from './ListSourceCon'
import ListSourceLib from './ListSourceLib'
import dummyData from './dummyData'

describe('ListSource test' , () => {
  const spy = jest.fn()
  const wrapper = shallow(<ListSource handleAddSource={spy}/>)

  it('should render',() => {
    expect(wrapper.length).toEqual(1)
  })

  it('should render a select element' , () => {
    expect(wrapper.node.type).toEqual('select')
  })

  it('should contain options within it', () => {
    expect(wrapper.find('option').length).toEqual(33)
  })

  it('should fire off a action when one of its options are selected' , () => {
    wrapper.simulate('change',{target :{value:'cnn'}})
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith('cnn')

    wrapper.simulate('change',{target :{value:'daily-mail'}})
    expect(spy).toBeCalledWith('daily-mail')
  })

  it('it should list options by alphabetical order', () => {
    //metro has the lowest score of hardcoded liberal value
    //cnbc has highest score of hardcoded liberal value
    expect(wrapper.find('option').first().text()).toEqual("abc-news-au")
    expect(wrapper.find('option').last().text()).toEqual("usa-today")
  })

 })

 describe('ListSourceCon test' , () => {
   const spy = jest.fn()
   const list = dummyData
   const wrapper = mount(<ListSourceCon handleAddSource={spy} list={list}/>)

   it('should render', () => {
     expect(wrapper.length).toEqual(1)
   })

   it('should render a list of options from the list of sources it is given', () => {
     expect(wrapper.find('option').length).toEqual(35)
   })

   it('should fire off a action when one of its options are selected', () => {
   wrapper.simulate('change',{target :{value:'mirror'}})
   expect(spy).toBeCalled();
   expect(spy).toBeCalledWith('mirror')

   wrapper.simulate('change',{target :{value:'newsweek'}})
   expect(spy).toBeCalledWith('newsweek')
  })

  it('should organize the list based on liberal values', () => {
    //metro has the lowest score of hardcoded liberal value
    //cnbc has highest score of hardcoded liberal value
    expect(wrapper.find('option').first().text()).toEqual("metro")
    expect(wrapper.find('option').last().text()).toEqual("cnbc")
  })
 })

 describe('ListSourceLib test' , () => {
   const spy = jest.fn()
   const list = dummyData
   const wrapper = mount(<ListSourceLib handleAddSource={spy} list={list}/>)

   it('should render', () => {
     expect(wrapper.length).toEqual(1)
   })

   it('should render a list of options from the list of sources it is given', () => {
     expect(wrapper.find('option').length).toEqual(35)
   })

   it('should fire off a action when one of its options are selected', () => {
   wrapper.simulate('change',{target :{value:'independent'}})
   expect(spy).toBeCalled();
   expect(spy).toBeCalledWith('independent')

   wrapper.simulate('change',{target :{value:'time'}})
   expect(spy).toBeCalledWith('time')
  })

  it('should organize the list based on liberal values', () => {
    //metro has the lowest score of hardcoded liberal value
    //cnbc has highest score of hardcoded liberal value
    expect(wrapper.find('option').first().text()).toEqual("cnbc")
    expect(wrapper.find('option').last().text()).toEqual("metro")
  })

 })
