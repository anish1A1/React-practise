/* eslint-disable no-unused-vars */
//import { useEffect, useReducer, useState } from 'react'

import './App.css'
import UsingReducer from './practise/usingReducer';
import RenderingLists from './practise/RenderingLists';
import UsingRef from './practise/UsingRef';
import Displaycolor from './practise/Displaycolor';
import Git from './ApIs/Git'
import UsingGraphql from './ApIs/UsingGraphql';
import Proprender from './RenderProps/Proprender';
import { Link } from 'react-router-dom';

function App() {
  
  // const [checked, setunchecked] = useReducer( (checked) => !checked ,false)
  // console.log(checked);
  return (
    <>
      <div>
        <nav>
          <Link to="/about" >About</Link> <span/>
          <Link to='/home'>Home </Link> 
          <Link to='/contact'>Contact </Link>

        </nav>
      </div>
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
        {/* <UsingRef /> */}
        <Displaycolor />
        <br />
        <Git />
        <br />

        <UsingGraphql />
      <br />
      <Proprender />
      <p>Hello</p>
    </>
  )
}

export default App


