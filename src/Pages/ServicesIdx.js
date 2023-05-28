import React from "react";
import { Link } from "react-router-dom";

const ServicesIdx = (props) => {

  //loaded function
  const loaded = () => {
    return props.services.map((service) => (
      <div key={service._id} className="service">
        <Link to={`/services/${service._id}`}>
          <h1 className="service-title"> {service.name}</h1>
        </Link>
        <img src={service.image} alt={service.name} />
        <h3> {service.description} </h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1> Loading Services ...</h1>
  }
  return (props.services ? loaded() : loading());
};

export default ServicesIdx;
