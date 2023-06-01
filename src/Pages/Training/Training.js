import React from 'react'
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import TrainingIdx from './indexT';
import TrainingCrt from './createT';
import TrainingShow from './showT';
import TrainingEdit from './editT';

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
        //update list of courses 
        getCourses()
    }

    const updateCourse = async (course, id) => {
        //make a PUT request to update a course
        await fetch(trainingUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(course)
        })
        //update list of courses
        getCourses()
    }

        const deleteCourse = async (id) => {
            //make DELETE request to delete a course
          await fetch (trainingUrl + id, {
            method: 'DELETE'
          })  
          //update list of courses
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

            <Route path='/:id' element={<TrainingShow courses={courses}/>}/>

            <Route path='/edit/:id' element = {<TrainingEdit courses = {courses} updateCourse = {updateCourse} deleteCourse = {deleteCourse}/>} />

        </Routes>
    </section>
  )
}

export default Training