import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const GalleryShow = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const posts = props.posts;
  const post = posts.find((p) => p._id === id);

  //linking edit button to edit route
  const edit = (e) => {
    navigate(`/gallery/edit/${post._id}`);
  };
  return (
    <div data-aos="fade-down-right" className="min-h-screen text-center flex flex-col items-center">
      <img className="rounded-2xl p-2 object-cover" src={post.image} alt={post.name} />
      <div className="border rounded-xl border-x-amber-950 p-2">
        <h2> {post.name}</h2>
        <h3> "{post.description}"</h3>
      </div>
    <br/>
      <Link to="/gallery"> Back to Gallery </Link> 
      <br/>
      <br/>
      <div className="text-black">
        <button className='p-2' onClick={edit}> Edit </button>
      </div>
    </div>
  );
};

export default GalleryShow;
