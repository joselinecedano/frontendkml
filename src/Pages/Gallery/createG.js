import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GalleryCrt = (props) => {
  const navigate = useNavigate();

  //state to hold form data
  const [postsForm, setPostsForm] = useState({
    name: "",
    image: "",
    description: "",
  });

  //handleChange for service form
  const handleChange = (e) => {
    setPostsForm({ ...postsForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for service form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createPost(postsForm);
    setPostsForm({
      name: "",
      image: "",
      description: "",
    });
    navigate("/gallery");
    console.log('Post added!')
  };

  return (
    <section >
      <h2> Add a Post </h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={postsForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="text-black"
        /><br/>
        <label> Image URL: </label>
        <input
          type="text"
          value={postsForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <label> Description: </label>
        <input
          type="text"
          value={postsForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="text-black"
        /><br/>
        <input type="submit" value="Add Post" />
      </form>
    </section>
  );
};

export default GalleryCrt;
