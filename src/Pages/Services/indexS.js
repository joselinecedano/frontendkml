import React from "react";
import { Link } from "react-router-dom";

const ServicesIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <div className="min-h-screen "> 
      <h1 className="font-oldlondon text-6xl text-center"> Services</h1><br/>
        <div className="flex flex-wrap justify-center border rounded-xl border-x-amber-950">
          <div className="w-full sm:w-1/2 p-2 ">
            <div className="text-center">
              <h1 className="font-oldlondon text-xl "> Policies </h1>
              <p>
                § Our regulare hours are from 8am - 5pm. Any appointments booked
                outside of our scheduled hours will be considered a sqeeze in
                appointment, which comes with a fee of $15.
                <br />§ We have a 10 minute grace period! Anything after is a{" "}
                <span className="underline text-red-500">cancellation</span>.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <div className="text-center">
              <h1 className="font-oldlondon text-xl"> Deposits </h1>
              <p>
                § A non-refundable $25 deposit is required to book appointment.
                <br />
                § A $1 electronic fee is included. § $25 deposits are deducted
                off the final price. <br /> § Deposits can be transferred when
                rescheduling appointments if a 24hr notice has been given.{" "}
                <br /> § Appointments are not booked until a deposit and
                confirmation email has been received.
              </p>
            </div>
          </div>
        </div><br/>
       
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
