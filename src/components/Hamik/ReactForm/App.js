import React,{useState,useEffect} from 'react'
// import Component from '../../Hamik/ReactForm/Component'
import axios from "axios"
import './App.css'



 function App () {

    const [limit, setLimit] = useState(null)
    const [data, setData] = useState()

    const handleChange = (e) => {
      const {value} = e.target
      setLimit(value)
    }
    useEffect(() =>{
        // axios(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        axios(`https://jsonplaceholder.typicode.com/posts/${limit}`)
        .then(response => setData(response.data))
    },[limit])

   const [value, setValue] = useState()
    
    const handleSubmit = (e) => {
     const value = e.target.value
     console.log(value);
    }

  return (
    <div className='posts'>
        <form>
            <select name="limit" id="limit" onChange={handleChange}>
            <option value="0"></option>
              <option value="1">1</option>           
              <option value="2">2</option>           
              <option value="3">3</option>           
              <option value="4">4</option>           
              <option value="5">5</option>                     
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
        </form>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Choose Id' />
          <button type='submit'>Clikc</button>
        </form>
        <pre>{JSON.stringify(data, null, 1)}</pre>
        <pre></pre>
    </div>
  )
}

export default App