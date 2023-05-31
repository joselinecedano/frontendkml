import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const ProductShow = (props) => {
  const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  const products = props.products;
  const product = products.find((p) => p._id === id);

  //linking edit button to edit route
  const edit = (e) => {
    navigate(`/products/edit/${product._id}`)
  }
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2> {product.name}</h2>
      <h3> ${product.price}</h3>
      <h4> {product.description}</h4>
      <div>
        <button className="edit-button" onClick={edit}> Edit </button>
      </div>
      <Link to="/products"> Back to products</Link>
    </div>
  );
};

export default ProductShow;