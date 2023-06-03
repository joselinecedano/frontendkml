import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'

const Admin = (props) => {

  return (
    <>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>} />
  </Routes>

  <Login/>
    </>
 
  )
}

export default Admin