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
        <div className="flex flex-wrap items-center justify-center">
        {props.posts.map((post) => (
          <div key={post._id}  className="relative p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center" data-aos="zoom-out-up">
            <Link to={`/gallery/${post._id}`}>
              <img
                className="object-fit rounded-2xl h-80 w-80"
                src={post.image}
                alt={post.name}
              />{" "}
            </Link>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <Link className="text-black" to="/gallery/form">Add a Post</Link>
      <br/>
      </div>
      
    );
  };

  const loading = () => {
    return <h1> Loading Gallery Posts ... </h1>;
  };
  return props.posts ? loaded() : loading();
};

export default GalleryIdx;
