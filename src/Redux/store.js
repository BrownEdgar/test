import React from 'react'
import { initialName , nameReducer} from './feuchers/post'



function store () {
  return (
    <div>{initialName.name}
    <button onClick={()=>nameReducer}>Add</button>
    </div>
  )
}

export default store