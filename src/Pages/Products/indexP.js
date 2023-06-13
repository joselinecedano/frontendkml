import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//import AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

const ProductsIdx = (props) => {
  //initialize AOS animation
  useEffect(() => {
    AOS.init();
  }, []);

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
              data-aos="fade-down"
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
              {/* <h3 className="text-center"> {product.description} </h3> */}
              <button className="border rounded-xl border-x-amber-950 p-1.5 mt-auto">
                <a href="https://app.acuityscheduling.com/schedule.php?owner=19702883">
                  Buy Now
                </a>
              </button>
            </div>
          ))}
          <Link to="/products/form">Add a Product</Link>
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
