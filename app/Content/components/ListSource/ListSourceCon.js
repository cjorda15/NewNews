import React from 'react'

const ListSourceCon = ({list,handleAddSource}) =>{

  const renderList = () => {
    const conList = list.reduce((acc,source) =>{
      acc.push({conValue:source.conservative - source.liberal,source:source.source})
      return acc
    },[])

    conList.sort(function(a,b){
      return b.conValue - a.conValue
    })

    return conList.map((obj,id)=>{
      return <option key={id}>{obj.source}</option>
    })
  }

  return(
    <select onChange={(e)=>{handleAddSource(e.target.value)}} >
      {renderList()}
    </select>
  )
}

export default ListSourceCon
