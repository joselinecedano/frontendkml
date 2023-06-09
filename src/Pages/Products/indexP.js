import React from "react";
import { Link } from "react-router-dom";

const ProductsIdx = (props) => {
  //loaded function
  const loaded = () => {
    return (
      <div className="min-h-screen">
        <h1 className="font-oldlondon text-6xl text-center"> Products </h1>
        <div className="flex flex-wrap justify-center ">
          {props.products.map((product) => (
            <div
              key={product._id}
              className="relative p-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center"
            >
              <Link to={`/products/${product._id}`}>
                <img
                  className="object-scale-down rounded-lg hover:scale-90"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <h1 className="text-center font-oldlondon text-2xl md:text-4xl">
                {product.name}
              </h1>
              <h3 className="text-center"> {product.description} </h3>
            </div>
          ))}
          <Link to="/products/form">Add a product</Link>
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h1> Loading Products ... </h1>;
  };
  return props.products ? loaded() : loading();
};

export default ProductsIdx;
