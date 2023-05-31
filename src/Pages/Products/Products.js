import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductsIdx from "./indexP";
import ProductsCrt from "./createP";

const Products = (props) => {
  const [products, setProducts] = useState(null);

  const productsUrl = process.env.REACT_APP_PRODUCTS_URL;

  const getProducts = async () => {
    const response = await fetch(productsUrl);
    const data = await response.json();
    setProducts(data.data);
  };

  const createProduct = async (product) => {
    //make post request to create product
    await fetch(productsUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
    })
    //update list of products
    getProducts()
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <Routes>
        <Route path="/" element={<ProductsIdx products={products} />} />

        <Route path="/form" element = {<ProductsCrt createProduct={createProduct} />}/>
      </Routes>
    </section>
  );
};

export default Products;
