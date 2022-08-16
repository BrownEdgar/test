import React, {useState} from 'react'
import MainForm from './MainForm'
import classNames from 'classnames'


import "./App.css"

export default function App() {
    //const [value, setValue]=useState("Edgar")
    // const [data, setData]=useState({
        // email:"",
    //     name:""
    // })

    //const[isDisabled, setisDisabled]=useState(true)


    // const handleChange=(e)=>{
    //     console.log(e.target.value);
    //     setValue(e.target.value)

    //const handleSubmit=(e)=>{
        //e.preventDefault()
        //console.log(e.target.username.value);
        // setValue(e.target.username.value)
        // e.target.username.value=""
        // setData({
        //     email:e.target.email.value,
        //     name: e.target.username.value
        // })
        //}

        //const handleChange=(e)=>{
            //const {value}=e.target;
            //if(value.trim()!=="" && value.length>2){
                //setisDisabled(false)
            //}else{
                //setisDisabled(true)
            //}
        //}
        const [isAgree, setisAgree]=useState(false)
        const handleChange=(e)=>{
            console.log(e);
            setisAgree(e.target.checked)
        }



  return (
    <div>
        <h1 className={classNames ( null, {
            green:isAgree
        })} > welcome </h1>
        {/* <form onSubmit={handleSubmit}> */}
            {/* <h1>Hello-{JSON.stringify(data, null, 1)}
                {/* {value} */}

                {/* </h1> */}
            {/* <input type="email"  id="email" required/>  */}
            {/* <input type="text"  id="username" onChange={handleChange} required */}
            {/* //value={value} onChange={handleChange} 
            /> */}
            {/* <button type='submit' disabled={isDisabled}>add name</button>
        </form> */}
    {/* <MainForm
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    isDisabled={isDisabled} */}
{/* /> */}
    <form>
        <input type="checkbox" id="agree" onChange={handleChange}/>
    </form>
    </div>
  )
}
