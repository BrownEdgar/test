import React, {useState} from 'react'
import MainForm from './MainForm'

import "./App.css"



export default function App() {

      const [data, setData]=useState({
      name:"",
      password:"",
      email:"",
      phoneNumber:""
     })

const [isDisabled, setisDisabled]=useState(true)


const handleSubmit=(e)=>{
e.preventDefault()
 setData({
         name: e.target.username.value,
         password: e.target.password.value,
         email: e.target.email.value,
         phoneNumber: e.target.phoneNumber.value
         })
        }  
        
        

 const handleChange=(e)=>{
    const {value}=e.target;
    if(value.trim()!==""){
    setisDisabled(false)
    }else{
    setisDisabled(true)
        }
        }

return (
    <div>
        <MainForm
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    isDisabled={isDisabled}
    />
    </div>
  )
  }
