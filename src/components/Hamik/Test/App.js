import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types';


 function App () {
   const [data, setData] = useState(null)

   useEffect(() => {
			axios(`https://fakestoreapi.com/products`)
				.then(response => setData(response.data))
	},[])

  

  return (
    <div className='App'>
        <pre>
  {JSON.stringify(data, null ,1)}
        </pre>
    </div>
  )
}


export default App