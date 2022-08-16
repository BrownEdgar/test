import React, {useState} from 'react'
import data from "./data/data.json" 

import "./App.css"

export default function App() {
    const [users, setUsers]=useState(data.users)
    const[activeId, setactiveId]=useState(null)
    console.log(users);
    // const handleClick=(id)=>{
    //     console.log(id);
    // }
    const handleClick=(id)=>{
        // const newUsers=users.filter(elem=>elem.id!==id)
        // setUsers(newUsers)
        setactiveId(id)
    }

    const addNewUsers=()=>{
      const newUser={id: users.length+1, name: "Karlos"}
      setUsers([...users, newUser])
    }
  return (
    <div>
      <h2>{activeId}</h2>
        {users.map(elem=>{
            return <div className={`box ${elem.id===activeId ? "active" : ""}`} key={elem.id}>
                <p>{elem.id}-<strong>{elem.name}</strong></p>
                <button onClick={()=>handleClick(elem.id)}>X</button>
                </div>
        })}

        <button className='add' onClick={addNewUsers}>Add new Users</button>
    </div>
  )
}
