import React from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const ProductShow = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const products = props.products;
  const product = products.find((p) => p._id === id);

  //linking edit button to edit route
  const edit = (e) => {
    navigate(`/products/edit/${product._id}`);
  };
  return (
    <div className="min-h-screen">
      <div className="flex flex-col sm:flex-row border rounded-xl border-x-amber-950 p-2">
        <img
          className="object-scale-down h-80 rounded-lg sm:w-1/2 sm:order-first"
          src={product.image}
          alt={product.name}
        />
        <div className="ml-4">
          <h2 className="font-oldlondon text-4xl text-center mt-4">
            {" "}
            {product.name}
          </h2>
          <h3 className="text-center text-xl italic"> ${product.price}</h3>
          <h4 className="text-lg text-center"> {product.description}</h4>
        </div>
      </div>
      <div>
        <button onClick={edit}> Edit </button>
      </div>
      <Link to="/products"> Back to Products</Link>
    </div>
  );
};

export default ProductShow;
