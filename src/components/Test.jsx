import React, { useContext } from 'react'
import { MyContext } from "../App"

export default function Test() {
    const value=useContext(MyContext)
  return (
    <div>
     <h1>Context value:{value.secretKey}</h1> 
     {/* 1 */}
    </div>
  )
}
