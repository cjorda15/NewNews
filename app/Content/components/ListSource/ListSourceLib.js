import React from 'react'

const ListSourceLib = ({list,handleAddSource}) => {

  const renderList = () => {
    const libList = list.reduce((acc,source) =>{
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

  return(
    <select onChange={(e)=>{handleAddSource(e.target.value)}} >
      {renderList()}
    </select>
  )
}


export default ListSourceLib
