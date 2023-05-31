import React from 'react'
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import TrainingIdx from './indexT';

const Training = (props) => {
    const [courses, setCourse] = useState(null)

    const trainingUrl = process.env.REACT_APP_TRAINING_COURSES_URL

    const getCourses = async () => {
        const response = await fetch (trainingUrl)
        const data = await response.json()
        setCourse(data.data)
    }

    useEffect(()=>{
        getCourses()
    }, [])

  return (
    <section>
        <Routes>
            <Route path='/' element={<TrainingIdx courses = {courses}/>}/>
        </Routes>
    </section>
  )
}

export default Training