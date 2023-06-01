import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ServiceEdit = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const services = props.services;
  const service = services.find((s) => s._id === id);

  //state for edit form
  const [editForm, setEditForm] = useState(service);

  //handleChange for edit form
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for edit form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateService(editForm, service._id);
    //redirect back to service show
    navigate(`/services/${service._id}`);
  };

  const deleteService = (e) => {
    e.preventDefault();
    props.deleteService(service._id);
    navigate("/services");
  };

  return (
    <div className="edit">
      <h2> Edit {service.name}</h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Service Name"
          onChange={handleChange}
          required
        />
        <br />
        <label> Image URL: </label>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <br />
        <label> Description: </label>
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="Service Description"
          onChange={handleChange}
        />
        <br />
        <label> Price: </label>
        <input
          type="number"
          value={editForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Update Service" />
      </form>
      <button className = 'delete' onClick={deleteService}> Delete </button>
    </div>
  );
};
export default ServiceEdit;