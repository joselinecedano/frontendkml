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
    <div className='text-center flex flex-col min-h-screen'>
       <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" class="giphy-embed" allowFullScreen title='kisses'></iframe>
      <h2 className='font-oldlondon text-4xl'> Edit {service.name}</h2>
      <form onSubmit={handleSubmit} className='p-2'>
        <label className='text-xl '> Name : </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Service Name"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1"
        />
        <br />
        <label className='text-xl '> Img URL : </label>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="text-black mt-2 p-1"
        />
        <br />
        <label className='text-xl '> Description: </label>
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="Service Description"
          onChange={handleChange}
          className="text-black mt-2 p-1"
        />
        <br />
        <label className='text-xl '> Price : </label>
        <input
          type="number"
          value={editForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1"
        />
        <br />
        <label className='text-xl '> Mini Fill : </label>
        <input
          type="number"
          value={editForm.miniPrice}
          name="miniPrice"
          placeholder="Price"
          onChange={handleChange}
          className="text-black mt-2 p-1"
        /><br/>
        <label className='text-xl '> Fill In : </label>
        <input
          type="number"
          value={editForm.fillPrice }
          name="fillPrice"
          placeholder="Price"
          onChange={handleChange}
          className="text-black mt-2 p-1"
        /><br/>
        <input type="submit" value="Update Service" className="p-2 hover:text-red-300"/>
      </form>
      <button onClick={deleteService} className="hover:text-red-500"> Delete </button>
    </div>
  );
};
export default ServiceEdit;
