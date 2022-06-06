import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const [cart, setcart] = useContext(CartContext);
  const product = { id: 1 };
  const [Data, setData] = useState([]);
  const [count, setcount] = useState(1);
  useEffect((e) => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setData(res.data));
  }, []);

  // const addtocart = (e) => {
  //   // e.preventDefault();
  //   axios
  //     .post(`http://localhost:8080/cartItems${e.id}`, { ...cart })
  //     .then((res) => setcart(res.data));
  // };
  // const remove = (id) => {
  //   axios
  //     .delete(`http://localhost:8080/cartItems${id}`)
  //     .then((res) => setcart(res.data));
  // };

  return (
    <div>
      {Data.map((e) => (
        <div id={e.id}>
          <div data-cy={`product-${product.id}`}>
            <h3 data-cy="product-name">{e.name}</h3>
            <h6 data-cy="product-description">{e.description}</h6>
            <button
              // onClick={addtocart(e.id)}
              data-cy="product-add-item-to-cart-button"
            >
              Add to cart
            </button>
            <div>
              <button
                onClick={() => setcount(count - 1)}
                data-cy="product-increment-cart-item-count-button"
              >
                +
              </button>
              <span data-cy="product-count">{count}</span>
              <button
                onClick={() => setcount(count - 1)}
                data-cy="product-decrement-cart-item-count-button"
              >
                -
              </button>
              <button
                // onClick={() => remove(e.id)}
                data-cy="product-remove-cart-item-button"
              >
                remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
