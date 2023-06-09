import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import FillIns from "../../Components/Fill-ins";

const ServiceShow = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const services = props.services;
  const service = services.find((s) => s._id === id);

  //linking edit button to edit route
  const edit = (e) => {
    navigate(`/services/edit/${service._id}`);
  };
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col sm:flex-row border rounded-xl border-x-amber-950 p-2">
        <img
          className="object-scale-down h-80 rounded-lg sm:w-1/2 sm:order-first"
          src={service.image}
          alt={service.name}
        />

        <div className="ml-4 ">
          <h2 className="font-oldlondon text-4xl text-center mt-4">
            {service.name}
          </h2>
          <h3 className="text-center text-xl italic"> ${service.price}</h3>
          <br />
          <h3 className="text-lg text-center"> {service.description}</h3>
        </div> 
      </div> 

       <FillIns/>
      
      <div>
        <button onClick={edit}> Edit</button>
      </div>
      <Link to="/services"> Back to Service</Link>
    </div>
  );
};

export default ServiceShow;
