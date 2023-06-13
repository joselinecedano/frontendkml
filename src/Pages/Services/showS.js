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
    <div className=" min-h-screen text-center">
      <div className="flex flex-col sm:flex-row border rounded-xl border-x-amber-950 p-2" data-aos="fade-down-right">
        <img
          className="object-scale-down h-80 rounded-xl sm:w-1/2 sm:order-first"
          src={service.image}
          alt={service.name}
        />

        <div className="ml-4 ">
          <h2 className="font-oldlondon text-4xl text-center mt-4">
            {service.name}
          </h2>
          <h3 className="text-center text-xl italic"> ${service.price}</h3>
          <h3 className="text-lg text-center"> {service.description}</h3>
          <div className="p-2">
            <button className="border rounded-xl border-x-amber-950 p-1 mt-auto ">
              <a href="https://app.acuityscheduling.com/schedule.php?owner=19702883">
                Book Now
              </a>
            </button>
          </div>
        </div>
      </div>

      <FillIns />
      <div className="flex flex-wrap justify-center " data-aos="fade-down-right">
        <div className="w-full sm:w-1/2 p-4 ">
          <div className="text-center border rounded-xl border-x-amber-950">
            <h1 className="font-oldlondon text-2xl "> Mini Fill : 1 Week  </h1>
            <h2> ${service.miniPrice}</h2>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <div className="text-center border rounded-xl border-x-amber-950">
            <h1 className="font-oldlondon text-2xl"> Fill In : 2 Weeks </h1>
            <h2> ${service.fillPrice}</h2>
          </div>
        </div>
      </div>
      <br />
      <div>
        <button onClick={edit}> Edit</button>
      </div>
      <Link to="/services"> Back to Services </Link>
    </div>
  );
};

export default ServiceShow;
