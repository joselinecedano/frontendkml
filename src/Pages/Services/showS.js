import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

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
      <div>
        <br />
        {/* <div className="">
          <img
            src="https://media.istockphoto.com/id/1382122980/vector/play-button-icon-with-long-shadow-on-blank-background-flat-design.jpg?s=612x612&w=0&k=20&c=3c6Gtl5QyteI85pl9k5KRNVVYX8ZnAaboQv5M7mqOvM="
            alt="play"
            className="object-scale-down h-60 rounded-lg ml-2"
          />
        </div>
        <div className="border rounded-xl border-x-amber-950">
          <div className="vw-full sm:w-full p-2">
            <h1 className="font-oldlondon text-center text-3xl">
              {" "}
              Arriving to your appointment
            </h1>
            <p>
              {" "}
              § Please make sure you're on time for appointments, due to
              COVID-19 we can no longer provide a waiting area. therefore,
              arriving early will mean you have to wait outside. <br />§ NO PLUS
              ONES - only clients having the treatment are permitted inside to
              follow safety measures, as per COVID-19.
              <br /> § If you and a friend, family, coworker ETC. booked an
              appointment to come back to back only the person getting lashed at
              the moment can be serviced. The other will have to wait in the
              car, we do not have a waiting area. <br />§ Please make sure you
              come to your appointment with clean lashes and no makeup
              (especially your eye area). Arriving with makeup may require a lash
              bath leaving less time for your lashes to be filled. <br />§ If
              you haven't already added a LASH REMOVAL when booking then I may
              not be able to provide one at your appointment. <br />§ Being 10
              minutes late will be a $10 late fee & 15 minutes late will
              unfortunately mean your appointment is cancelled.
              <br />§ The remainder of your service is to be paid thru
              zelle/cashapp/apple pay. <br />§ When you arrive please dm us or
              text that your here so we can know when to let you in, sometimes
              we aren't done till the very last minute
              <br />§ ALL FULL SETS CAN TAKE 1HOUR 30MIN - 2 HOURS!
            </p>
            
          </div>
        </div> */}
      </div>
      <div>
        <button onClick={edit}> Edit</button>
      </div>
      <Link to="/services"> Back to Service</Link>
    </div>
  );
};

export default ServiceShow;
