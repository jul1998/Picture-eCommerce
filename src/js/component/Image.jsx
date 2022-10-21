import React from "react"
import {useState} from "react"
import {useContext} from "react"
import {Context} from "../Context.jsx"
import PropTypes from 'prop-types';

function Image({className, img}){

    const [isHovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart} = useContext(Context)
 
    const heartFilled = img.isFavorite?<i className="ri-heart-fill favorite"></i>:heart
    const heart = isHovered?<i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i>:null
    const plus =  isHovered?<i onClick={()=>{addToCart(img)}} className="ri-add-circle-line cart"></i>:null


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
            {plus}
        </div>
    )
}

export default Image