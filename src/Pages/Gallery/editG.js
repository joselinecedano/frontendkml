import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const GalleryEdit = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const posts = props.posts;
  const post = posts.find((p) => p._id === id);

  //state for edit form
  const [editForm, setEditForm] = useState(post);

  //handleChange for edit form
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for edit form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updatePost(editForm, post._id);
    //redirect back to post show
    navigate(`/gallery/${post._id}`);
  };

  const deletePost = (e) => {
    e.preventDefault();
    props.deletePost(post._id);
    navigate("/gallery");
  };

  return (
    <div className='text-center flex flex-col min-h-screen'>
       <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" className="giphy-embed" allowFullScreen title='kisses'></iframe>
      <h2 className='font-oldlondon text-4xl'> Edit {post.name}</h2> 
      <form className='p-2' onSubmit={handleSubmit}>
        <label className='text-xl '> Name : </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="post Name"
          onChange={handleChange}
          className="text-black mt-2 p-1"        />
        <br />
        <label className='text-xl '> Img URL : </label>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1"        />
        <br />
        <label className='text-xl '> Description : </label>
        <input 
          type="text"
          value={editForm.description}
          name="description"
          placeholder="post Description"
          onChange={handleChange}
          className="text-black mt-2 p-1"        />
        <br />
        <input type="submit" value="Update Post" className="p-2 hover:text-red-300"/>
      </form>
      <button className="hover:text-red-500" onClick={deletePost}> Delete </button>
    </div>
  );
};
export default GalleryEdit;
