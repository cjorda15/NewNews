import React, { Component } from 'react'

class ListSourceLib extends  Component{
  constructor(props){
    super(props)
  }

 componentDidMount(){
   const libList = this.props.list.reduce((acc,source) =>{
     acc.push({libValue:source.liberal - source.conservative, source:source.source})
     return acc
     },[])

   libList.sort(function(a,b){
     return b.libValue - a.libValue
   })
   this.props.handleAddSource(libList[0].source)
 }

   renderList (){
    const libList = this.props.list.reduce((acc,source) =>{
      acc.push({libValue:source.liberal - source.conservative, source:source.source})
      return acc
      },[])

    libList.sort(function(a,b){
      return b.libValue - a.libValue
    })
    return libList.map((obj,id)=>{
      return <option key={id}>{obj.source}</option>
    })
  }

  render(){
    return(
      <select onChange={(e)=>{
        this.props.handleAddSource(e.target.value)
        this.props.handleNewList()
      }} >
        {this.renderList()}
      </select>
    )
  }
 }


export default ListSourceLib
