import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const products = props.products;
  const product = products.find((p) => p._id === id);

  //state for edit form
  const [editForm, setEditForm] = useState(product);

  //handleChange for edit form
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  //handleSubmit for edit form
  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateProduct(editForm, product._id);
    //redirect back to Product show
    navigate(`/products/${product._id}`);
  };

  const deleteProduct = (e) => {
    e.preventDefault();
    props.deleteProduct(product._id);
    navigate("/products");
  };

  return (
    <div className='text-center flex flex-col min-h-screen'>
      <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" className="giphy-embed" allowFullScreen title='kisses'></iframe>
      <h2 className='font-oldlondon text-4xl'> Edit {product.name}</h2>
      <form onSubmit={handleSubmit} className='p-2'>
        <label className='text-xl '> Name : </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Product Name"
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
        <label className='text-xl '> Description : </label>
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="product Description"
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
        <input type="submit" value="Update Product" className="p-2 hover:text-red-300"/>
      </form>
      <button className="hover:text-red-500" onClick={deleteProduct}> Delete </button>
    </div>
  );
};
export default ProductEdit;
