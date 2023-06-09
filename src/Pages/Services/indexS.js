import React from "react";
import { Link } from "react-router-dom";

const ServicesIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <div className="min-h-screen "> 
      <h1 className="font-oldlondon text-6xl text-center"> Services</h1>
       <p className="text-red-500 text-center"> * PLEASE READ OUR GUIDLINES BEFORE BOOKING *</p><br/>
        <div className="flex flex-wrap items-center justify-center ">
          {props.services.map((service) => (
            <div
              key={service._id}
              className="relative p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
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
            </div>
          ))}
        </div>
        <br/>
        <div className="border rounded-xl border-x-amber-950">
        <div className="w-full sm:w-full p-2 ">
            <div className="text-center">
              <h1 className="font-oldlondon text-xl"> Fill Ins </h1>
              <p>
              § You must have at least 50% of your lashes left,
otherwise you'll be charged a full set.<br/> § Fill is need to be booked within a 2-3 week period, anything after will be considered a full set. <br/> § After 4 weeks a majority of remaining lashes will be extremely outgrown and need a removal. If this hasn't been booked in prior, I may not be able to complete a
fullset within your allocated slot. <br/>§ I don't infill other lash tech's work. You would need
to book in for a removal and a fresh set.
              </p>
            </div>
          </div>
        </div>
        <Link to="/services/form">Add a Service</Link>
        
      </div>
    );
  };

  const loading = () => {
    return <h1> Loading Services ... </h1>;
  };
  return props.services ? loaded() : loading();
};

export default ServicesIdx;
