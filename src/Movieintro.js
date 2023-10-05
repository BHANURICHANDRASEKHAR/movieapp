import React from 'react';
import {popular,thrillar,teen} from './data';

import Cards from './Cards';
export default function Movieintro() {
  return (
    <div>
<Nav1/>
    </div>
  )
}
export const Nav1=()=>{
    return(
    <nav className='fl' style={{background:'black',padding:'2px',width:'98%',borderRadius:'10px'}}>
    <h1>netflix clone</h1>
    <ul > 
        <li>
            <a href="#" className='signup' style={{marginTop:'4px'}}>Sign up</a>
        </li>
    </ul>
</nav>
    )
}
const Frame=()=>{
    return(
        <div style={{height:'97vh',width:'100%', backgroundImage:'url(https://images.hindustantimes.com/tech/img/2023/06/22/1600x900/rama_banam_1687440585525_1687440585777.jpg)'}}></div>
    )
}