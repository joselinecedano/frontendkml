import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import ProductsIdx from "./indexP";
import ProductsCrt from "./createP";
import ProductShow from "./showP";
import ProductEdit from "./editP";

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

  const updateProduct = async (product, id) => {
    //make PUT request 
    await fetch (productsUrl + id , {
        method: 'PUT', 
        headers: {
            'Content-Type' :' application/json'
        },
        body: JSON.stringify(product)
    })
    //update list of products
    getProducts()
  }

  const deleteProduct = async (id) => {
    //make DELETE request 
    await fetch( productsUrl + id, {
        method: "DELETE",
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

        <Route path="/:id" element = {<ProductShow products = {products}/>} />

        <Route path="/edit/:id"
          element={
            <ProductEdit products={products} updateProduct = {updateProduct}
            deleteProduct = {deleteProduct} />}/>
      </Routes>
    </section>
  );
};

export default Products;
