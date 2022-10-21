import React from "react"
import Header from "./component/Header.jsx"
import Cart from "./pages/Cart.jsx"
import Photos from "./pages/Photos.jsx"
import { Route, Routes, Link } from "react-router-dom";

function App() {    
    return (
        <div>
            <Header />
            


            <h1>Home Page</h1>
            <Routes>
                <Route exact path="/" element={<Photos/>}></Route>
                <Route exact path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>
    )
}

export default App