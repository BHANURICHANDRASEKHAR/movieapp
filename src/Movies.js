import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import { Route,Routes } from 'react-router-dom'
export default function Movies() {
  return (
    <div>
    <Routes>
    <Route path='/movie' element={<Cards/>}></Route></Routes>
    </div>
  )
}
