import React, {useState, useEffect} from 'react'
import axios from "axios"


import "./App.css"

export default function App() {
    const[limit, setLimit]= useState(null)
    const[data, setData]=useState([])
    const[id, setId]=useState(null)
    


    const handleChange=(e)=>{
        const {value}=e.target
        setLimit(value)
    }

    const handleChange1=(e)=>{
          const {value}=e.target
          setId(value)
        setId(e.target.id.value)
        //setId(e.target.id.value)}
    e.target.id.value=""
    } 






    useEffect(()=>{
        if (limit){
            axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then(response=>setData(response.data))
        }
    }, [limit])

    useEffect(()=>{
        if (id){
            axios(`https://jsonplaceholder.typicode.com/posts?_id=${id}`)
            //.then(response=>setId(response.id))
            .then(response=>setData(response.data))
            
        }
    }, [id])


    

    



// const handleSubmit=(e)=>{
//     e.preventDefault()
    //  
    //console.log(e.target.id.value);
    //setId(e.target.id.value)}
    //e.target.id.value=""
    // const {value}=e.target
    //      setId(value)}
    
       



  return (
    <div>
        
        <form>
            <input type="number" name="limit" id="limit"  onChange={handleChange}/>
        </form>
{!!data.length
        ? <pre>{JSON.stringify(data, null, 1)}</pre>
    :( <div>
        <h2>No data</h2>
    </div>)
    }

<form>
<input type="number" name="id" id="id" onChange={handleChange1} />
<button type='submit'>id</button>
</form>
{!!data.length
        ? <pre>{JSON.stringify(id, null, 1)}</pre>
    :( <div>
        <h2>No id</h2>
    </div>)
    }
    </div>
  )

}