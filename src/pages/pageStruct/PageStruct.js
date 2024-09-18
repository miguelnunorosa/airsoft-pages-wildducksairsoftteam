import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import ReactDOM from 'react-dom';



import "./pageStruct.css";
import Footer from "./footer/Footer";





class PageStruct extends Component {
    
   render(){
    
    return(
        <HashRouter>

            <Footer />
        </HashRouter>
    );
   }
}

export default PageStruct;