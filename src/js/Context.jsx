import React from "react"
import App from "./App.jsx"
import {useState, useEffect} from "react"

const Context = React.createContext()

 function ContextProvider ({children}){

    const [photos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(()=>{
      fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
         
    },[])

    function addToCart(img){
            setCartItems((previmg) =>[...previmg,img] )
            //console.log(cartItems)
        }
    
    function removeFromCart(id){
        setCartItems((prevCartItems) =>
        prevCartItems.filter((element) => element.id !== id)
            );
          };


    function toggleFavorite(id) {
        const updatedArr = photos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }


    

    return(
        <Context.Provider value={{photos, toggleFavorite, addToCart, cartItems, removeFromCart, setCartItems}}>
        {children}
    </Context.Provider>
    )


}

export {ContextProvider, Context}