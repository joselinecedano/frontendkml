import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceCrt = (props) => {
  const navigate = useNavigate();

  //state to hold form data
  const [serviceForm, setServiceForm] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  //handleChange for service form
  const handleChange = (e) => {
    setServiceForm({ ...serviceForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for service form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createService(serviceForm);
    setServiceForm({
      name: "",
      image: "",
      description: "",
      price: "",
    });
    navigate("/services");
    console.log('Service added!')
  };

  return (
    <section >
      <h2> Add a Service </h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={serviceForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        /><br/>
        <label> Image URL: </label>
        <input
          type="text"
          value={serviceForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        /><br/>
        <label> Description: </label>
        <input
          type="text"
          value={serviceForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        /><br/>
        <label> Price: </label>
        <input
          type="number"
          value={serviceForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        /><br/>
        <input type="submit" value="Add Service" />
      </form>
    </section>
  );
};

export default ServiceCrt;
