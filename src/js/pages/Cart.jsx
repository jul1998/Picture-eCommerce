import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context.jsx";
import CartItem from "../component/CartItems.jsx";

function Cart() {
  const { cartItems, setCartItems } = useContext(Context);
  const total = cartItems.length * 5.99;
  const [orderText, setOrderText] = useState("Place Order");
  const [isNotCartEmpty, setCartEmpty] = useState(false);

  const totalDisplay = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const placeOrder = () => {
    setOrderText("Placing order...");
    const setTimeoutid = setTimeout(() => {
      alert("Order Placed!");
      setCartItems([]);
      setOrderText("Place Order");
    }, 3000);
  };
  useEffect(() => {
    const emptyCar = () => {
      if (cartItems.length === 0) {
        console.log(cartItems);
        setCartEmpty(true);
      } else if (cartItems.length > 0) {
        console.log(cartItems);
        setCartEmpty(false);
      }
    };
    emptyCar();
  }, [isNotCartEmpty]);

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartElements}
      <p className="total-cost">Total: {totalDisplay} </p>
      {
        cartItems.length>0?
        <div className="order-button">
          <button onClick={placeOrder}>{orderText}</button>
        </div> :
        <p>You have no items in your cart</p>
      }
    </main>
  );
}

export default Cart;
