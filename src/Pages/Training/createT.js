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
    <section >
      <h2> Add a Course </h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={courseForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        /><br/>
        <label> Image URL: </label>
        <input
          type="text"
          value={courseForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        /><br/>
        <label> Description: </label>
        <input
          type="text"
          value={courseForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        /><br/>
        <label> Price: </label>
        <input
          type="number"
          value={courseForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        /><br/>
            
        <input type="submit" value="Add Course" />
      </form>
    </section>
  );
};

export default TrainingCrt;
