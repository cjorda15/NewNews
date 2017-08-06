// import React from 'react'
// import Favorites from './Favorites'
// import { shallow, mount } from 'enzyme'
// import fetchMock from 'fetch-mock'
//
// describe('favorites test', () => {
//   const spy = jest.fn()
//   const userResponse = {
//     data: {
//       id: 1,
//       name: "chris",
//       password : "password"
//     }
//   }
//
//   const mockCalls = () => {
//     fetchMock.post('http://localhost:3000/api/v1/favorites/favs', {
//       status: 200,
//       ok: true,
//       body: userResponse
//       })
//
//     fetchMock.get('*', {
//       status: 200,
//       ok: true,
//       body: userResponse
//   })
//  }
//
//   mockCalls()
//   const wrapper = shallow(<Favorites
//                             user={{id:1,name:'chris'}}
//                             favorites={[]}
//                             handleShowFavorites={spy}/>)
//
//   it('should render', () => {
//     expect(wrapper.length).toEqual(1)
//   })
//
//   it('should have a className', () => {
//     expect(wrapper.hasClass('favorites-container'))
//   })
//
//   it('should run a  api call on componentWillMount', () => {
//     expect(fetchMock.called()).toEqual(true)
//   })
//
//   // it('should have some favorites in it if it contains any', () => {
//   //   // console.log(wrapper.find('ArticleContainer'));
//   // })
//
//
// })
