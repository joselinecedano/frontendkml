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
    <div className='text-center flex flex-col min-h-screen'>
       <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" className="giphy-embed" allowFullScreen title='kisses'></iframe>
      <h2 className='font-oldlondon text-4xl'> Edit {course.name}</h2>
      <form onSubmit={handleSubmit} className='p-2'>
        <label className='text-xl '> Name : </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Course Name"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1 "
        />
        <br />
        <label className='text-xl '> Img URL : </label>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="text-black mt-2 p-1 "
        />
        <br />
        <label className='text-xl '> Description : </label>
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="Course Description"
          onChange={handleChange}
          className="text-black mt-2 p-1"
        />
        <br />
        <label className='text-xl '> Price : </label>
        <input
          type="number"
          value={editForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1"
        />
        <br />
        <input type="submit" value="Update Course" className="p-2 hover:text-red-300"/>
      </form>
      <button className="hover:text-red-500" onClick={deleteCourse}> Delete </button>
    </div>
  );
};
export default TrainingEdit;
