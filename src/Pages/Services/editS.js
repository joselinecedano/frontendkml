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
    <div >
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
          className="text-black"
        />
        <br />
        <label> Image URL: </label>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="text-black"
        />
        <br />
        <label> Description: </label>
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="Service Description"
          onChange={handleChange}
          className="text-black"
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
          className="text-black"
        />
        <br />
        <label> Mini Fill: </label>
        <input
          type="number"
          value={editForm.miniFill}
          name="Mini fill"
          placeholder="Price"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <label> Fill In: </label>
        <input
          type="number"
          value={editForm.fillIn}
          name="fillIn"
          placeholder="Price"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <input type="submit" value="Update Service" />
      </form>
      <button onClick={deleteService}> Delete </button>
    </div>
  );
};
export default ServiceEdit;
