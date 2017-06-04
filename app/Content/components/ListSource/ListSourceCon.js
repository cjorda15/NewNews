import React, {Component} from 'react'

class ListSourceCon extends  Component{
  constructor(props){
    super(props)
  }

 componentDidMount(){
   const conList = this.props.list.reduce((acc,source) =>{
     acc.push({libValue:source.conservative - source.liberal, source:source.source})
      return acc
     },[])

   conList.sort(function(a,b){
     return b.libValue - a.libValue
   })
   this.props.handleAddSource(conList[0].source)
 }

  renderList (){
    const conList = this.props.list.reduce((acc,source) =>{
      acc.push({conValue:source.conservative - source.liberal, source:source.source})
      return acc
      },[])

    conList.sort(function(a,b){
      return b.conValue - a.conValue
    })

    return conList.map((obj,id)=>{
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

export default ListSourceCon
