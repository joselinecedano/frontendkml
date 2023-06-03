import React from "react";
import { Link } from "react-router-dom";

const TrainingIdx = (props) => {

  //loaded function
  const loaded = () => {
    return (
      <>
     {props.courses.map((course) => (
      <div key={course._id} >
        <Link to={`/training/${course._id}`}>
          <h1 className="course-title"> {course.name}</h1>
        </Link>
        <img src={course.image} alt={course.name} />
        <h3> {course.description} </h3>
      </div>
    ))}
   <Link to ='/training/form'>Add a Course</Link>
      </>
    );
  };

  const loading = () => {
    return <h1> Loading Training Courses ... </h1>
  }
  return (props.courses ? loaded() : loading());
};

export default TrainingIdx;
