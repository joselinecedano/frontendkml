import React from "react";
import { Link } from "react-router-dom";

const ServicesIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <>
        <div className="flex flex-wrap items-center justify-center py-16 ">
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
        <Link to="/services/form">Add a Service</Link>
      </>
    );
  };

  const loading = () => {
    return <h1> Loading Services ... </h1>;
  };
  return props.services ? loaded() : loading();
};

export default ServicesIdx;
