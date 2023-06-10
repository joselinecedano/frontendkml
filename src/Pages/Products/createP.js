import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsCrt = (props) => {
  const navigate = useNavigate();

  //state to hold form data
  const [productForm, setProductForm] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
  });

  //handleChange for service form
  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for service form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProduct(productForm);
    setProductForm({
      name: "",
      image: "",
      description: "",
      price: "",
    });
    navigate("/products");
    console.log('Product added!')
  };

  return (
    <section >
      <h2> Add a Product </h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={productForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        /><br/>
        <label> Image URL: </label>
        <input
          type="text"
          value={productForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        /><br/>
        <label> Description: </label>
        <input
          type="text"
          value={productForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        /><br/>
        <label> Price: </label>
        <input
          type="number"
          value={productForm.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        /><br/>
                <label> Mini Fill: </label>
        <input
          type="number"
          value={productForm.miniFill}
          name="Mini fill"
          placeholder="Mini Fill"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <label> Fill In: </label>
        <input
          type="number"
          value={productForm.fillIn}
          name="fillIn"
          placeholder="Fill In"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <input type="submit" value="Add Product" />
      </form>
    </section>
  );
};

export default ProductsCrt;
