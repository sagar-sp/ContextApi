import React, { useContext } from "react";
import { Cart } from "../Context.js/Context";
import "./styles.css";
const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  console.log(cart)
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add"
          onClick={() => {
            setCart([cart.filter((c) => c.id !== prod.id)]);
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
