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
    <div >
      <h2> Edit {post.name}</h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="post Name"
          onChange={handleChange}
        />
        <br />
        <label> Image URL: </label>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <br />
        <label> Description: </label>
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="post Description"
          onChange={handleChange}
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
        <input type="submit" value="Update Post" />
      </form>
      <button  onClick={deletePost}> Delete </button>
    </div>
  );
};
export default GalleryEdit;
