import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const GalleryShow = (props) => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const posts = props.posts;
  const post = posts.find((p) => p._id === id);

  //linking edit button to edit route
  const edit = (e) => {
    navigate(`/gallery/edit/${post._id}`)
  }
  return (
    <div>
      <img src={post.image} alt={post.name} />
      <h2> {post.name}</h2>
      <h3> {post.description}</h3>
      <div>
        <button onClick={edit}> Edit </button>
      </div>
      <Link to="/gallery"> Back to Gallery </Link>
    </div>
  );
};

export default GalleryShow;