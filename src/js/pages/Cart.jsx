import React, {useContext} from "react"
import { Link } from "react-router-dom";
import {Context} from "../Context.jsx"
import CartItem from "../component/CartItems.jsx"


function Cart() {

    const {cartItems} = useContext(Context)
    const total = (cartItems.length * 5.99)

   
    const totalDisplay =  total.toLocaleString("en-US", {style: "currency", currency: "USD"})
    

    const cartElements = cartItems.map(item =>(
        <CartItem key={item.id}
            item={item}
        />
    ))
 
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p className="total-cost">Total: {totalDisplay} </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart