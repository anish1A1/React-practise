import { useEffect, useReducer, useState } from 'react'

import './App.css'
import UsingReducer from './practise/usingReducer';
import RenderingLists from './practise/RenderingLists';

function App() {
  
  // const [checked, setunchecked] = useReducer( (checked) => !checked ,false)
  // console.log(checked);
  return (
    <>
      
      {/* <h1>Vite + React</h1>

      <div className="check">
        <input type="checkbox"
        value={checked}
        onChange={() => setunchecked()}
        />
        <label>
          {checked ? "Checked" : "Not Checked"}
        </label>
        
      </div> */}
    
        <UsingReducer />
        <RenderingLists />
      
    </>
  )
}

export default App
