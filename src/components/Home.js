import React, { useState, useContext } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context.js/Context";

faker.seed(100);

const Home = () => {

  const {cart, setCart} = useContext(Cart)

  const productsArray = [...Array(20)].map((prod) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));
  
  const [products] = useState(productsArray);
  console.log(cart);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}/>
      ))}
    </div>
  );
};

export default Home;
