import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductsIdx from "./indexP";

const Products = (props) => {
  const [products, setProducts] = useState(null);

  const productsUrl = process.env.REACT_APP_PRODUCTS_URL;

  const getProducts = async () => {
    const response = await fetch(productsUrl);
    const data = await response.json();
    setProducts(data.data);
    console.log(data)
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <Routes>
        <Route path="/" element={<ProductsIdx products={products} />} />
      </Routes>
    </section>
  );
};

export default Products;
