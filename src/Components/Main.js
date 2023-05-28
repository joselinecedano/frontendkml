import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Services from '../Pages/Services'

const Main = (props) => {
  return (
    <main>
        <Routes>
            <Route path='/services' element= {<Services/>}/>
        </Routes>
    </main>
  )
}

export default Main