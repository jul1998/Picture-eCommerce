//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import {ContextProvider} from "./Context.jsx"
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./App.jsx";

//render your react application
ReactDOM.render(
<ContextProvider>
    <Router>
        <App />
    </Router>
</ContextProvider>
, document.querySelector("#app"));
