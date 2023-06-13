import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrainingCrt = (props) => {
  const navigate = useNavigate();

  //state to hold form data
  const [courseForm, setCourseForm] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  //handleChange for service form
  const handleChange = (e) => {
    setCourseForm({ ...courseForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for service form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createCourse(courseForm);
    setCourseForm({
      name: "",
      image: "",
      description: "",
      price: "",
    });
    navigate("/training");
    console.log('Course added!')
  };

  return (
    <div className='text-center flex flex-col min-h-screen'>
      <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" class="giphy-embed" allowFullScreen title='kisses'></iframe>
      <h2 className='font-oldlondon text-4xl'> Add a Course </h2>
      <form onSubmit={handleSubmit} className='p-2'>
        <label className='text-xl'> Name : </label>
        <input
          type="text"
          value={courseForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1 "
        /><br/>
        <label className='text-xl'> Img URL : </label>
        <input
          type="text"
          value={courseForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="text-black mt-2 p-1 "
        /><br/>
        <label className='text-xl'> Description : </label>
        <input
          type="text"
          value={courseForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1 "
        /><br/>
        <label className='text-xl'> Price : </label>
        <input
          type="number"
          value={courseForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1 "
        /><br/>
            
        <input className="p-2 hover:text-red-300" type="submit" value="Add Course" />
      </form>
    </div>
  );
};

export default TrainingCrt;
