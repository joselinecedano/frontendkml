import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const TrainingShow = (props) => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const courses = props.courses;
  const course = courses.find((c) => c._id === id);

  //linking edit button to edit route
  const edit = (e) => {
    navigate(`/training/edit/${course._id}`)
  }
  return (
    <div>
      <img src={course.image} alt={course.name} />
      <h2> {course.name}</h2>
      <h3> ${course.price}</h3>
      <h4> {course.description}</h4>
      <div>
        <button className="edit-button" onClick={edit}> Edit</button>
      </div>
      <Link to="/training"> Back to Training Courses</Link>
    </div>
  );
};

export default TrainingShow;
