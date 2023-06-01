import React from 'react'
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import TrainingIdx from './indexT';
import TrainingCrt from './createT';

const Training = (props) => {
    const [courses, setCourse] = useState(null)

    const trainingUrl = process.env.REACT_APP_TRAINING_COURSES_URL

    const getCourses = async () => {
        const response = await fetch (trainingUrl)
        const data = await response.json()
        setCourse(data.data)
    }
    const createCourse = async (course) => {
        //make a POST request to create a course
        await fetch (trainingUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        getCourses()
    }

    useEffect(()=>{
        getCourses()
    }, [])

  return (
    <section>
        <Routes>
            <Route path='/' element={<TrainingIdx courses = {courses}/>}/>

            <Route path='/form' element = {<TrainingCrt  courses = {courses}createCourse={createCourse}/>}/>

        </Routes>
    </section>
  )
}

export default Training