import React from "react"
import {useState} from "react"
import {useContext} from "react"
import {Context} from "../Context.jsx"
import PropTypes from 'prop-types';

function Image({className, img}){

    const [isHovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    
 
    const heartFilled = img.isFavorite?<i className="ri-heart-fill favorite"></i>:heart
    const heart = isHovered?<i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i>:null
    
    const plus =  isHovered?<i onClick={()=>{addToCart(img)}} className="ri-add-circle-line cart"></i>:null


    function cartIcon() {
      const isInCart = cartItems.some(ele => ele.id ===img.id)
      if (isInCart){
        return <i className="ri-shopping-cart-fill cart" onClick={()=>removeFromCart(img.id)}></i>
      }else if(isHovered){
        return <i onClick={()=>{addToCart(img)}} className="ri-add-circle-line cart"></i>
      }
    }




Image.propTypes = {

className: PropTypes.string,
  isFavorite: PropTypes.bool,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    isFavorite:PropTypes.bool
  })}


    return(
        <div className={`${className} image-container`}  onMouseLeave={()=>{setHovered(false)}} onMouseEnter={()=>{setHovered(true)}}>
            <img src={img.url} className="image-grid"/>
            {heartFilled}
            {heart}
            {cartIcon()}
    
        </div>
    )
}

export default Image