import React, {useContext} from "react"
import {Context} from "../Context.jsx"
export default function CartItem({item}){

    const {removeFromCart} = useContext(Context)


    return(
        <div className="cart-item">
        <i onClick={()=>removeFromCart(item.id)} className="ri-delete-bin-line"></i>
        <img src={item.url} width="150px" />
        <p>$5.99</p>
    </div>
    )

}