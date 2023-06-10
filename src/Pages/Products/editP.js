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
    <div >
      <h2> Edit {product.name}</h2>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Product Name"
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
          placeholder="product Description"
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
        <label> Mini Fill: </label>
        <input
          type="number"
          value={editForm.miniFill}
          name="Mini fill"
          placeholder="Mini Fill"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <label> Fill In: </label>
        <input
          type="number"
          value={editForm.fillIn}
          name="fillIn"
          placeholder="Fill In"
          onChange={handleChange}
          required
          className="text-black"
        /><br/>
        <input type="submit" value="Update Product" />
      </form>
      <button  onClick={deleteProduct}> Delete </button>
    </div>
  );
};
export default ProductEdit;
