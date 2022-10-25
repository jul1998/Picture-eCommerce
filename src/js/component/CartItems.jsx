import React, {useContext, useState} from "react"
import {Context} from "../Context.jsx"
import PropTypes from 'prop-types';

export default function CartItem({item}){

    const {removeFromCart} = useContext(Context)
    const [isTrashIconHovered, setTrashIconHovered] = useState(false)

    const filledTrash = isTrashIconHovered?"ri-delete-bin-fill":"ri-delete-bin-line"

    CartItem.prototype={
        item: PropTypes.shape({
            url: PropTypes.string.isRequired
        })
    }
    

    return(
        <div className="cart-item">
        <i onClick={()=>removeFromCart(item.id)} 
        className={filledTrash}
        onMouseEnter={()=>setTrashIconHovered(true)}
        onMouseLeave={()=> setTrashIconHovered(false)}
        
        ></i>
        <img src={item.url} width="150px" />
        <p>$5.99</p>
    </div>
    )

}