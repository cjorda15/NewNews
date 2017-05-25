import React from 'react'

const ListCriteria = ({handleChangeCriteria}) => {
  return(
    <select onChange={(e)=>{handleChangeCriteria(e.target.value)}}>
      <option>
        alphabetical
      </option>
      <option>
        most conservative
      </option>
      <option>
        most liberal
      </option>
    </select>
  )
}

export default ListCriteria
