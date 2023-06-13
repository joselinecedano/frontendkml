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
    <div className='text-center flex flex-col min-h-screen'>
      <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" class="giphy-embed" allowFullScreen title='kisses'></iframe>
      <h2 className='font-oldlondon text-4xl'> Add a Post </h2>
      <form className='p-2' onSubmit={handleSubmit}>
        <label className='text-xl '> Name : </label>
        <input
          type="text"
          value={postsForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="text-black mt-2 p-1"
        /><br/>
        <label className='text-xl '> Img URL : </label>
        <input
          type="text"
          value={postsForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1"
        /><br/>
        <label className='text-xl '> Description : </label>
        <input
          type="text"
          value={postsForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="text-black mt-2 p-1"
        /><br/>
        <input type="submit" value="Add Post" className="p-2 hover:text-red-300"/>
      </form>
    </div>
  );
};

export default GalleryCrt;
