import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ServicesIdx from "./indexS";
import ServiceCrt from "./createS";
import ServiceShow from "./showS";

const Services = (props) => {
  const [services, setServices] = useState(null);

  const servicesUrl = process.env.REACT_APP_SERVICES_URL;

  const getServices = async () => {
    const response = await fetch(servicesUrl);
    const data = await response.json();
    setServices(data.data);
  };

  const createService = async (service) => {
    // make post request to create a service
    await fetch(servicesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
    //update list of services
    getServices();
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <section>
      <Routes>
        <Route path="/" element={<ServicesIdx services={services} />} />

        <Route
          path="/form"
          element={
            <ServiceCrt services={services} createService = {createService} />}/>

        <Route path="/:id" element={<ServiceShow services={services} />} />
      </Routes>
    </section>
  );
};

export default Services;
