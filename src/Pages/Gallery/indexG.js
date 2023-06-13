import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryIdx = (props) => {
  //initialize AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

  //loaded function
  const loaded = () => {
    return (
      <div className="min-h-screen text-center">
        {props.posts.map((post) => (
          <div key={post._id} className="flex p-2" data-aos="zoom-out-up">
            <Link to={`/gallery/${post._id}`}>
              <img
                className="object-scale-down rounded-lg h-80 w-80"
                src={post.image}
                alt={post.name}
              />{" "}
            </Link>
          </div>
        ))}
        <Link to="/gallery/form">Add a Post</Link>
      </div>
    );
  };

  const loading = () => {
    return <h1> Loading Gallery Posts ... </h1>;
  };
  return props.posts ? loaded() : loading();
};

export default GalleryIdx;
