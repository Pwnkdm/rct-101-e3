// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Product from "./Product/Product";
import React from "react";

const Products = () => {
  // const [Data, setData] = useState([]);
  // const navigate = useNavigate();

  // const click = (id) => {
  //   navigate(`/${id}`);
  // };
  // useEffect((e) => {
  //   axios
  //     .get("http://localhost:8080/products")
  //     .then((res) => setData(res.data));
  // }, []);
  return (
    <div>
      {/* Code here */}
      {/* <h1>Products</h1>
      <div>
        {Data.map((item) => (
          <div id={item.id}>
            <h2>{item.name}</h2>
            <h6>{item.description}</h6>
            <button onClick={() => click(item.id)}>Add to Cart</button>
          </div>
        ))}
      </div> */}
      <Product />
    </div>
  );
};

export default Products;
