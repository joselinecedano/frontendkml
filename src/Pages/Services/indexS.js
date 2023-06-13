import React from "react";
import { Link } from "react-router-dom";

const ServicesIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <div className="min-h-screen text-center"> 
      <h1 className="font-oldlondon text-6xl text-center"> Services</h1>
       <p className="text-red-500 text-center"> * PLEASE READ OUR GUIDLINES BEFORE BOOKING *</p><br/>
        <div className="flex flex-wrap items-center justify-center ">
          {props.services.map((service) => (
            <div
              key={service._id}
              className="relative p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center"
            >
              <Link to={`/services/${service._id}`}>
                <img
                  className="object-scale-down rounded-lg hover:scale-90"
                  src={service.image}
                  alt={service.name}
                />
              </Link>
              <h1 className="text-center font-oldlondon text-2xl md:text-4xl">
                {" "}
                {service.name}
              </h1>
              <button className="border rounded-xl border-x-amber-950 p-1 mt-auto"><a href="https://app.acuityscheduling.com/schedule.php?owner=19702883">Book Now</a></button>
            </div>
          ))}
        </div>
        <br/>
        <Link  className=''to="/services/form">Add a Service</Link>
        
      </div>
    );
  };

  const loading = () => {
    return <h1> Loading Services ... </h1>;
  };
  return props.services ? loaded() : loading();
};

export default ServicesIdx;
