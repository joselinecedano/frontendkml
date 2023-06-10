import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TrainingEdit = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const courses = props.courses;
  const course = courses.find((c) => c._id === id);

  //state for edit form
  const [editForm, setEditForm] = useState(course);

  //handleChange for edit form
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for edit form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateCourse(editForm, course._id);
    //redirect back to course show
    navigate(`/training/${course._id}`);
  };

  const deleteCourse = (e) => {
    e.preventDefault();
    props.deleteCourse(course._id);
    navigate("/training");
  };


  return (
    <div>
      <h2> Edit {course.name}</h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Course Name"
          onChange={handleChange}
          required
        />
        <br />
        <label> Image URL: </label>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <br />
        <label> Description: </label>
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="Course Description"
          onChange={handleChange}
        />
        <br />
        <label> Price: </label>
        <input
          type="number"
          value={editForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <br />
        <label> Mini Fill: </label>
        <input
          type="number"
          value={editForm.miniFill}
          name="Mini fill"
          placeholder="Mini Fill"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <label> Fill In: </label>
        <input
          type="number"
          value={editForm.fillIn}
          name="fillIn"
          placeholder="Fill In"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <input type="submit" value="Update Course" />
      </form>
      <button onClick={deleteCourse}> Delete </button>
    </div>
  );
};
export default TrainingEdit;
