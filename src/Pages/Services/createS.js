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
    <div className='text-center flex flex-col min-h-screen'>
       <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" className="giphy-embed" allowFullScreen title='kisses'></iframe>
      <h2 className='font-oldlondon text-4xl'> Add a Service </h2>
      <form onSubmit={handleSubmit} className='p-2'>
        <label className='text-xl '> Name : </label>
        <input
          type="text"
          value={serviceForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1"
        /><br/>
        <label className='text-xl'> Img URL : </label>
        <input
          type="text"
          value={serviceForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="text-black mt-2 p-1 "
        /><br/>
        <label className='text-xl'> Description : </label>
        <input
          type="text"
          value={serviceForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="text-black mt-2 p-1 "
        /><br/>
        <label className='text-xl'> Price : </label>
        <input
          type="number"
          value={serviceForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
          className="text-black mt-2 p-1 "
        /><br/>
    
        <label className='text-xl'> Mini Fill : </label>
        <input
          type="number"
          value={serviceForm.miniPrice}
          name="miniPrice"
          placeholder="Price"
          onChange={handleChange}
          className="text-black mt-2 p-1 "
        /><br/>
        <label className='text-xl'> Fill In : </label>
        <input
          type="number"
          value={serviceForm.fillPrice}
          name="fillPrice"
          placeholder="Price"
          onChange={handleChange}
          className="text-black mt-2 p-1 "
        /><br/>
        <input type="submit" value="Add Service" className="p-2 hover:text-red-300"/>
      </form>
    </div>
  );
};

export default ServiceCrt;
