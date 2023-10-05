import React, { useState } from 'react' ;
import {Link } from 'react-router-dom';
import Cards from './Cards'
import { Route,Routes } from 'react-router-dom'

export default function Navbar() {
  const [status,setstus]=useState(false);
  return (
    <div>
    <nav className='fl' style={{background:'black',padding:'2px',width:'98%',borderRadius:'10px'}}>
    <h1>netflix clone</h1>
    <input type="search" style={{borderRadius:'10px',outline:'none',marginLeft:'20%',width:'300px',height:'20px',padding:'10px',marginTop:'4px'}} placeholder='searh for a movie' ></input>
    <ul > 
  <li>
      <a to='/movie' className='signup' onClick={()=>{
  setstus(true)
      }} style={{marginTop:'4px'}}>Sign up</a>
  </li>
</ul>
  </nav>
  
    </div>
  )
}


