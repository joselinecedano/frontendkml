import React from "react";
import { Link } from "react-router-dom";

const ProductsIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <>
     {props.products.map((product) => (
      <div key={product._id} className="product">
        <Link to={`/products/${product._id}`}>
          <h1 className="product-title"> {product.name}</h1>
        </Link>
        <img src={product.image} alt={product.name} />
        <h3> {product.description} </h3>
      </div>
    ))}
   <Link to ='/products/form'>Add a product</Link>
      </>
    );
  };

  const loading = () => {
    return <h1> Loading Products ... </h1>
  }
  return (props.products ? loaded() : loading());
};

export default ProductsIdx;
