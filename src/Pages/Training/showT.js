import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const TrainingShow = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const courses = props.courses;
  const course = courses.find((c) => c._id === id);

  //linking edit button to edit route
  const edit = (e) => {
    navigate(`/training/edit/${course._id}`);
  };
  return (
    <div className=" min-h-screen text-center">
      <div className="flex flex-col sm:flex-row p-2" data-aos="fade-down-right">
        <img
          className="object-cover h-80 rounded-2xl sm:w-1/2 sm:order-first p-2"
          src={course.image}
          alt={course.name}
        />
        <div className="ml-4 border rounded-xl border-x-amber-950 p-2">
          <h2 className="font-oldlondon text-4xl text-center mt-4">
            {course.name}
          </h2>
          <h3 className="text-center text-xl italic"> ${course.price}</h3>
          <h4 className="text-lg text-center"> {course.description}</h4>
          <div className="p-2">
            <button className="border rounded-xl border-x-amber-950 p-1 mt-auto ">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=19702883">
                Book Now
              </a>
            </button>
          </div>
        </div>
      </div>
      <br/>
      <Link to="/training"> Back to Training Courses</Link>
      <br/>
      <br/>
      <div className="text-black">
        <button onClick={edit}> Edit</button>
      </div>
    </div>
  );
};

export default TrainingShow;
