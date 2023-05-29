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
  };

  return (
    <section className="createService">
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
        />
        <label> Image URL: </label>
        <input
          type="text"
          value={serviceForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <label> Description: </label>
        <input
          type="text"
          value={serviceForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <label> Price: </label>
        <input
          type="number"
          value={serviceForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Add Service" />
      </form>
    </section>
  );
};

export default ServiceCrt;
