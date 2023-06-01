import React from "react";
import { Link } from "react-router-dom";

const GalleryIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <>
     {props.posts.map((post) => (
      <div key={post._id} className="post">
        <Link to={`/gallery/${post._id}`}>
        <img src={post.image} alt={post.name} /> </Link>
         {/* <h2 className="post-title"> {post.name}</h2>
        <h3> {post.description} </h3> */}
      </div>
    ))}
   <Link to ='/gallery/form'>Add a Post</Link>
      </>
    );
  };

  const loading = () => {
    return <h1> Loading Gallery Posts ... </h1>
  }
  return (props.posts ? loaded() : loading());
};

export default GalleryIdx;
