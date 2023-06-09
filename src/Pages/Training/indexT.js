import React from "react";
import { Link } from "react-router-dom";

const TrainingIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <div className="min-h-screen">
        <h1 className="font-oldlondon text-6xl text-center"> One on One's </h1><br/>
       <div className="flex flex-wrap justify-center ">
        {props.courses.map((course) => (
          <div
            key={course._id}
            className="relative p-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center "
          >
            <Link to={`/training/${course._id}`}>
              <img
                className="object-scale-down rounded-lg hover:scale-90"
                src={course.image}
                alt={course.name}
              />
            </Link>
            <h1 className="text-center font-oldlondon text-2xl md:text-4xl">
              {" "}
              {course.name}
            </h1>
            <h3 className="text-center"> {course.description} </h3>
          </div>
        ))}
        <Link to="/training/form">Add a Course</Link>
      </div>
      </div>
     
    );
  };

  const loading = () => {
    return <h1> Loading Training Courses ... </h1>;
  };
  return props.courses ? loaded() : loading();
};

export default TrainingIdx;
