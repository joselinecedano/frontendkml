import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceShow = (props) => {
  const params = useParams();
  const id = params.id;
  const services = props.services;
  const service = services.find((s) => s._id === id);

  return (
    <div>
      <img src={service.image} alt={service.name} />
      <h2> {service.name}</h2>
      <h3> ${service.price}</h3>
      <h4> {service.description}</h4>
      <Link to="/services"> Back to Service</Link>
    </div>
  );
};

export default ServiceShow;
