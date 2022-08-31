import React  from 'react'
import Component1 from './Component1'
import{MyContext} from './MainContext'



import "./App.scss"


 function App() {
  return (
    <div className='App'>
       <h2>App</h2> 
       <MyContext.Provider value={{
        x:1 
       }}>
    
       <Component1/>
       </MyContext.Provider>
    </div>
  )
  
	}
  
export default App